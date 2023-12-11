class Word {
    constructor() {
        this.btnNewWord = document.getElementById("btnNewWord");
        this.inputPl = document.getElementById("inputPl");
        this.inputEng = document.getElementById("inputEng");
        this.polishWordValue = "";
        this.englishWordValue = "";
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
            this.polishWordValue = this.inputPl.value;
            this.englishWordValue = this.inputEng.value;

            let newWord = {
                polishWord: this.polishWordValue,
                englishWord: this.englishWordValue,
            };

            fetch("/api/Api/AddWord", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newWord).toUpperCase(),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    this.inputPl.value = "";
                    this.inputEng.value = "";
                    dictionary.Init();
                })
                .catch(error => {
                    console.error("Fetch error:", error);
                    // Obsługa błędów
                });
        });
    }
}
let dictionary = new Dictionary();
let word = new Word();
word.AddNewWord();