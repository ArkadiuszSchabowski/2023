console.log("Dictionary loaded");

class Dictionary {
    constructor() {
        this.btnDisplay = document.getElementById("btnDisplayWords");
        this.ListWordsDiv = document.getElementById("AllWordsDiv");

        this.btnDisplay.addEventListener("click", async () => {
            console.log("btnDisplayClicked");
            let path = "api/Api/GetWords";

            try {
                const response = await fetch(path);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);

                // Wyczyść istniejące elementy w divie przed dodaniem nowych
                this.ListWordsDiv.innerHTML = "";

                // Iteruj po danych i dodaj nowe divy
                data.forEach(item => {
                    var newDiv = document.createElement("div");
                    newDiv.textContent = `Polish: ${item.polishWord}, English: ${item.englishWord}`;
                    this.ListWordsDiv.appendChild(newDiv);
                });

            } catch (error) {
                console.error("Fetch error:", error);
                // Obsługa błędów
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var dictionary = new Dictionary();
});
