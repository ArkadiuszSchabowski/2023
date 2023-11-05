document.addEventListener("DOMContentLoaded", function () {
    class Score {
        constructor() {
            this.score = document.getElementById("score");
            this.points = 0;
        }
        UpdateScore(points) {
            this.score.innerText = `Twój wynik to: ${points}`;
        }
    }
    class Keyboard {
        constructor() {
            this.keyboard = document.getElementById("keyboardDiv");
        }
        CreateTable() {
            let firstRow = document.createElement("div");
            let secondRow = document.createElement("div");
            let thirdRow = document.createElement("div");
            firstRow.style.display = "flex";
            secondRow.style.display = "flex";
            thirdRow.style.display = "flex";
            secondRow.style.padding = "25px";

            for (let i = 0; i < 26; i++) {
                let button = document.createElement("button");
                button.style.background = "white";
                button.style.marginLeft = "10px";
                button.innerText = String.fromCharCode(65 + i);
                button.style.width = "50px";
                button.style.height = "50px";

                if (i < 9) {
                    firstRow.appendChild(button);
                } else if (i < 17) {
                    secondRow.appendChild(button);
                } else {
                    thirdRow.appendChild(button);
                }
            }

            this.keyboard.appendChild(firstRow);
            this.keyboard.appendChild(secondRow);
            this.keyboard.appendChild(thirdRow);
        }
    }

    let score = new Score();
    score.UpdateScore(0);
    let keyboard = new Keyboard();
    keyboard.CreateTable();
});
