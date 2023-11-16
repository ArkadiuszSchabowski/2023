class User {
    constructor() {
        this.btnAddUser = document.getElementById('btnAddUser');
        this.inputFirstName = document.getElementById('inputFirstName');
        this.inputLastName = document.getElementById('inputLastName');
        this.inputYearOfBirth = document.getElementById('inputYearOfBirth');

        this.btnAddUser.addEventListener("click", () => this.AddUser());
    }

    AddUser() {
        var firstNameValue = this.inputFirstName.value;
        var lastNameValue = this.inputLastName.value;
        var yearOfBirthValue = this.inputYearOfBirth.value;

        if (isNaN(yearOfBirthValue)) {
            console.log("Rok urodzenia musi być liczbą");
            return;
        }

        var newUser = {
            FirstName: firstNameValue,
            LastName: lastNameValue,
            YearOfBirth: parseInt(yearOfBirthValue)
        };

        fetch('/api/User/AddUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(errorMessage => {
                        if (errorMessage.includes("Użytkownik o podanych danych już istnieje.")) {
                            console.log("Użytkownik o podanych danych już istnieje.");
                        } else {
                            console.error('Błąd podczas dodawania użytkownika:', errorMessage);
                        }
                        throw new Error(errorMessage);
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log('Użytkownik dodany pomyślnie. ID:', data.id);
            })
            .catch(error => {
                // Dodatkowe obsługi błędów, jeśli są potrzebne
            });
    }
}

var user = new User();