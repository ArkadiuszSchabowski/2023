let btnColor = document.getElementById("btnColor");
let clickCount = 0;
let inputText = document.getElementById("inputText");

btnColor.addEventListener("click", GetRandomColor);

function GetRandomColor(){
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString("16");
    inputText.value = randomColor;
    document.body.style.background = randomColor;
}
