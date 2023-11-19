class Word {
    constructor() {
        this.btnNewWord = document.getElementById("btnNewWord");
        this.inputPl = document.getElementById("inputPl");
        this.inputEng = document.getElementById("inputEng");
    }

    AddNewWord() {
        this.btnNewWord.addEventListener("click", () => {
            if (this.inputPl.value == "") {
                console.log("Nie wpisano słowa po polsku")
                return;
            }
            if (this.inputEng.value == "") {
                console.log("Nie wpisano słowa po angielsku")
                return;
            }
            let polishWordValue = this.inputPl.value;
            let englishWordValue = this.inputEng.value;

            var newWord = {
                polishWord: polishWordValue,
                englishWord: englishWordValue,
            };

            fetch("/api/Api/AddWord", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newWord),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    console.log(data);
                    // Możesz dodać dodatkowe logiki obsługi tutaj
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                    // Obsługa błędów
                });
        });
    }
}

var word = new Word();
word.AddNewWord();