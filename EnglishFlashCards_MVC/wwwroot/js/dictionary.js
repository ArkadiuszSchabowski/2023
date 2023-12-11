console.log("Dictionary loaded");

class Dictionary {
    constructor() {
        this.btnDisplay = document.getElementById("btnDisplayWords");
        this.PolishWordsDiv = document.getElementById("PolishWordsDiv");
        this.EnglishWordsDiv = document.getElementById("EnglishWordsDiv");
        this.lblSummary = document.getElementById("lblSummary");
        this.showWords = false;
        this.lblSummaryCount = 0;

        this.btnDisplay.addEventListener("click", async () => {
            this.BtnDisplayClick();
        });
    }
    EditSelectWord(){
        
    }
    RemoveSelectWord(){

    }
    async Init() {
        let path = "api/Api/GetWords";

        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (this.showWords === false) {
            data.forEach(item => {
                let newPlDiv = document.createElement("div");
                let newEngDiv = document.createElement("div");

                newPlDiv.textContent = `${item.polishWord}`;
                newEngDiv.textContent = `${item.englishWord}`;

                this.PolishWordsDiv.appendChild(newPlDiv);
                this.EnglishWordsDiv.appendChild(newEngDiv);
            });
            this.CountWords(data);
            this.showWords = true;
        } else {
            this.PolishWordsDiv.innerHTML = "";
            this.EnglishWordsDiv.innerHTML = "";
            this.CountWords(data);
            this.showWords = false;
        }
    }

    async BtnDisplayClick() {
        if (this.showWords == false) {
            console.log("btnDisplayClicked - false");
            await this.Init();
            this.showWords = true;
        } else {
            console.log("btnDisplayClicked - true");
            this.PolishWordsDiv.innerHTML = "";
            this.EnglishWordsDiv.innerHTML = "";
            this.showWords = false;
        }
    }

    CountWords(data) {
        this.lblSummary.innerText = "";
        this.lblSummary.innerText += "Poznane słowa: " + data.length;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let dictionary = new Dictionary();
    dictionary.Init();
});