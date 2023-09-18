let btnChangeTheme = document.getElementById("btnChangeTheme");
let mainFrame = document.getElementById("mainFrame");
let left = document.getElementById("left");
let center = document.getElementById("center");
let lblTheme = document.getElementById("lblTheme");

let isDark = true;

btnChangeTheme.addEventListener("click", ChangeTheme);

function ChangeTheme() {
    if (isDark) {
        // Jasny motyw
        document.body.style.backgroundColor = "darkred"; // Tło - pomarańczowy
        left.style.backgroundColor = "orangered"; // Tło dla #left - biszkoptowy
        center.style.backgroundColor = "orangered"; // Tło dla #center - biszkoptowy
        lblTheme.style.color = "white"; // Kolor tekstu - biały
        mainFrame.style.backgroundColor = "dimgray"; // Tło dla #mainFrame - jasnoszary

        let childrenLeft = left.children;
        for (i = 0; i < childrenLeft.length; i++) {
            childrenLeft[i].style.backgroundColor = "dimgray"; // Tło dla dzieci #left - jasnoszary
            childrenLeft[i].style.color = "white"; // Kolor tekstu dla dzieci #left - biały
        }

        isDark = false; // Zmiana stanu na jasny motyw
    } else {
        // Ciemny motyw
        document.body.style.backgroundColor = "darkgray";
        left.style.backgroundColor = "black";
        center.style.backgroundColor = "black";
        lblTheme.style.color = "white";
        mainFrame.style.backgroundColor = "dimgray";

        let childrenLeft = left.children;
        for (i = 0; i < childrenLeft.length; i++) {
            childrenLeft[i].style.backgroundColor = "dimgray";
            childrenLeft[i].style.color = "white";
        }

        isDark = true; // Zmiana stanu na ciemny motyw
    }
}
