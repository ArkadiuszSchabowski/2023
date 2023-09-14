"use strict";

let highscores = document.getElementById("highscores");
let newRow;

// Stwórz tabelę na początku
let newTable = document.createElement("div");
newTable.classList.add("highscoresTable");
highscores.appendChild(newTable);

function AddNewTableToHighscores() {
  for (let i = 1; i < 11; i++) {
    newRow = document.createElement("p");
    newRow.classList.add("highscoresRow");
    newRow.textContent = [i] + ".";
    newTable.appendChild(newRow);
  }
}

AddNewTableToHighscores();
