import ballerina/http;

type User record {
    int id;
    string email;
    string password;
};

// Lista użytkowników w pamięci
User[] users = [
    {id: 1, email: "user1@example.com", password: "password1"},
    {id: 2, email: "user2@example.com", password: "password2"},
    {id: 3, email: "user3@example.com", password: "password3"}
];

// Metoda pomocnicza do sprawdzenia, czy użytkownik istnieje w liście
function isUserExist(string email, string password) returns boolean {
    foreach var user in users {
        if (user.email == email && user.password == password) {
            return true;
        }
    }
    return false;
}

service /users on new http:Listener(8080) {
resource function get getUsers() returns json {
    // Zwracamy listę użytkowników jako odpowiedź w formacie JSON
    return checkpanic json:from(users);
}
    resource function get getUser int id returns json {
        foreach var user in users {
            if (user.id == id) {
                // Zwracamy użytkownika o określonym ID jako odpowiedź w formacie JSON
                return check user
            }
        }
        // Jeśli użytkownik o danym ID nie został znaleziony, zwracamy pustą odpowiedź
        return ();
    }

    resource function post addUser json userJson returns int | json {
        // Dodajemy nowego użytkownika do listy
        User newUser = check userJson;
        users.push(newUser);
        // Zwracamy ID nowego użytkownika jako odpowiedź
        return newUser.id;
    }

    resource function post resetPassword json userEmail returns int {
        string email = check userEmail.email;
        foreach var user in users {
            if (user.email == email) {
                // Znaleziono użytkownika, kod 202 (Accepted)
                return 202;
            }
        }
        // Nie znaleziono użytkownika, kod 400 (Bad Request)
        return 400;
    }
}

service /auth on new http:Listener(8081) {

    resource function post login json userCredentials returns int {
        string email = check userCredentials.email;
        string password = check userCredentials.password;
        if (isUserExist(email, password)) {
            // Prawidłowa kombinacja, kod 200 (OK)
            return 200;
        } else {
            // Nieprawidłowa kombinacja, kod 401 (Unauthorized)
            return 401;
        }
    }
}

public function main() returns error? {
    // Tworzymy nowe listenery na portach 8080 i 8081
    http:Listener userListener = check new http:Listener(8080);
    http:Listener authListener = check new http:Listener(8081);

    // Rozpoczynamy nasłuchiwanie
    check userListener.start();
    check authListener.start();

    io:println("User API started listening on port 8080");
    io:println("Auth API started listening on port 8081");
}