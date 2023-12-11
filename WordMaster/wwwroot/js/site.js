class Word {
    constructor() {
        this.isFirstRun = true;

        this.PlWordsDiv = document.getElementById("PlWordsDiv");
        this.EngWordsDiv = document.getElementById("EngWordsDiv");

        this.CountWordsDiv = document.getElementById("CountWords");
        this.counter = 0;
    }
    async Init() {
        if (this.isFirstRun) {
            let loadingOverlay = document.getElementById("loadingOverlay");
            loadingOverlay.style.display = "flex";
            this.isFirstRun = false;
        }

        let path = "https://localhost:5000/api/word/words";
        let response = await fetch(path);
        let data = await response.json();
        this.CreateDiv(data)

        loadingOverlay.style.display = "none";
    }
    CreateDiv(data) {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let plDiv = document.createElement("div");
            let engDiv = document.createElement("div");

            plDiv.className = "plClass";
            engDiv.className = "engClass";

            plDiv.textContent = `Id:${data[i].id} - ${data[i].polishWord}`;
            engDiv.textContent = `Id: ${data[i].id} - ${data[i].englishWord}`;

            this.PlWordsDiv.appendChild(plDiv);
            this.EngWordsDiv.appendChild(engDiv);
        }
        this.CountWords(data);
    }
    CountWords(data) {
        this.counter = data.length;
        this.CountWordsDiv.innerHTML = `Poznane słowa: ${this.counter}`;
    }
}
let word = new Word();
word.Init();

class Buttons {
    constructor() {
        this.btnAdd = document.getElementById("btnAdd");
        this.btnUpdate = document.getElementById("btnUpdate");
        this.btnClear = document.getElementById("btnClear");
        this.btnSearch = document.getElementById("btnSearch");
        this.btnDisplay = document.getElementById("btnDisplay");
        this.btnDelete = document.getElementById("btnDelete");

        this.inputSearch = document.getElementById("inputSearch");
        this.polishWordInput = document.getElementById("polishWordInput");
        this.englishWordInput = document.getElementById("englishWordInput");

        this.PlWordsDiv = document.getElementById("PlWordsDiv");
        this.EngWordsDiv = document.getElementById("EngWordsDiv");

        this.responseActionDiv = document.getElementById("responseActionDiv");

    }
    ClearFields() {
        this.inputSearch.value = "";
        this.polishWordInput.value = "";
        this.englishWordInput.value = "";
    }
    ClearList() {
        this.PlWordsDiv.innerHTML = "";
        this.EngWordsDiv.innerHTML = "";
    }
    ButtonsActive() {
        this.BtnClear();
        this.BtnDisplay();
        this.BtnSearch();
        this.BtnAdd();
        this.BtnDelete();
        this.BtnUpdate();
    }
    BtnUpdate() {
        this.btnUpdate.click.addEventListener("click", () => {

        })
    }

    BtnDelete() {

        this.btnDelete.addEventListener("click", async () => {

            let id = this.inputSearch.value;

            if (id === "") {
                this.responseActionDiv.innerText = "Wprowadź Id słowa do usunięcia!";
                this.SetDefaultText();
                return;
            }

            let path = `https://localhost:5000/api/word/removeWord/${id}`;
            let response = await fetch(path, {
                method: "DELETE"
            });
            if (response.ok) {
                this.responseActionDiv.innerText = `Słowo o Id:${id} usunięte pomyślnie!`;
                this.SetDefaultText();
            }
            if (response.status === 404) {
                this.responseActionDiv.innerText = `Nie znaleziono słowa o podanym Id: ${id}!`;
                this.SetDefaultText();
            }
            this.inputSearch.value = "";
        })
    }
    BtnAdd() {
        this.btnAdd.addEventListener("click", async () => {
            console.log("btnAdd clicked!");

            let plWord = this.polishWordInput.value;
            let engWord = this.englishWordInput.value;

            if (!this.ClientSideValidation(plWord, engWord)) {
                return;
            }

            try {
                let path = "https://localhost:5000/api/word/addWord";
                let data = {
                    polishWord: plWord,
                    englishWord: engWord
                };

                let response = await fetch(path, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    this.responseActionDiv.innerText = "Słowo dodane pomyślnie!";
                    this.SetDefaultText();
                }
                if (response.status === 409) {
                    this.responseActionDiv.innerText = "Słowo już istnieje w słowniku!";
                    this.ClearFields();
                    this.SetDefaultText();
                }
            }
            catch (e) {
                this.responseActionDiv.innerText = "Wystąpił nieoczekiwany błąd";
                this.SetDefaultText();
            }
        });
    }
    ClientSideValidation(plWord, engWord) {

        if (plWord == "" && engWord == "") {
            this.responseActionDiv.innerText = "Wprowadź polskie słowo i jego angielski odpowiednik!";
            this.SetDefaultText();
            return false;
        }

        if (plWord == "") {
            this.responseActionDiv.innerText = "Nie wpisano słowa po polsku!";
            this.SetDefaultText();
            return false;
        }

        if (engWord == "") {
            this.responseActionDiv.innerText = "Nie wpisano słowa po angielsku!";
            this.SetDefaultText();
            return false;
        }
        return true;
    }

    BtnClear() {
        this.btnClear.addEventListener("click", () => {
            this.ClearFields();
        });
    }
    BtnDisplay() {
        this.btnDisplay.addEventListener("click", () => {
            console.log("btnDisplay clicked!");
            if (this.PlWordsDiv.children.length > 0) {
                this.ClearList();
                return;
            }
            word.Init();
            return;
        });
    }
    BtnSearch() {

        this.btnSearch.addEventListener("click", () => {
            let id = this.inputSearch.value;
            if (id === "") {
                this.responseActionDiv.innerText = "Wprowadź Id słowa do odszukania!";
                this.SetDefaultText();
                return;
            }
            this.GetWord(id);
            this.inputSearch.value = "";
        });
    };
    SetDefaultText() {
        setTimeout(() => {
            this.responseActionDiv.innerText = "Witaj w aplikacji WordMaster";
        }, 2000);
    }
    async GetWord(id) {
        let path = `https://localhost:5000/api/word/words/${id}`;
        let response = await fetch(path);

        if (!response.ok) {
            console.log("!response")
            this.responseActionDiv.innerText = "Brak słowa o podanym Id!";
            this.SetDefaultText();
            return;
        }
        let data = await response.json();

        this.responseActionDiv.innerText = "Słowo odszukane pomyślnie!";
        this.polishWordInput.value = data.polishWord;
        this.englishWordInput.value = data.englishWord;
        this.SetDefaultText();
    }
};
let buttons = new Buttons();
buttons.ButtonsActive();