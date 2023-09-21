"use strict";
function AddTableToFirstPage() {
  let skrypt = document.getElementById("skrypt");
  for (let i = 1; i < 11; i++) {
      let newRow = document.createElement("div");
    if(i % 2 == 0){
        newRow.classList.add("orange");
    }
    if(i % 2 == 1){
        newRow.classList.add("orangeRed");
    }
      skrypt.appendChild(newRow);
  }
}
AddTableToFirstPage();
