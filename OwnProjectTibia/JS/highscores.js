let highscores = document.querySelector(".highscores");

highscores.addEventListener("click", async function () {
  let highscoresDiv = document.getElementById("highscores");
  let newRow;

  // Stwórz tabelę na początku
  let newTable = document.createElement("div");
  newTable.id = "hej";
  newTable.classList.add("highscoresTable");
  highscoresDiv.appendChild(newTable);

  function AddNewTableToHighscores() {
    for (let i = 1; i < 11; i++) {
      newRow = document.createElement("p");
      newRow.classList.add("highscoresRow");
      newRow.textContent = [i] + ".";
      newTable.appendChild(newRow);
    }
  }

  AddNewTableToHighscores();
});
