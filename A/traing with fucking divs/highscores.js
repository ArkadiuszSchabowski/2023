// highscores.js
function NewTable() {
    let tableDiv = document.getElementById("table");
    let newDiv;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            newDiv = document.createElement("div");
            newDiv.classList.add("rowClassA");
            newDiv.textContent = i + ".";
            tableDiv.appendChild(newDiv);
        } else {
            newDiv = document.createElement("div");
            newDiv.classList.add("rowClassB");
            newDiv.textContent = i + ".";
            tableDiv.appendChild(newDiv);
        }
    }
}

NewTable();
