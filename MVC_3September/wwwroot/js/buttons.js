class Buttons {
    constructor() {
        this.btnA = document.querySelector("#btnA");
        this.btnB = document.querySelector("#btnB");
        this.btnC = document.querySelector("#btnC");
        this.btnD = document.querySelector("#btnD");
        this.btnAudience = document.querySelector("#btnAudience");
        this.btnPhone = document.querySelector("#btnPhone");
        this.btnFiftyFifty = document.querySelector("#btnFiftyFifty");
    }
    SetButtonsAsVisible() {
        this.btnA.style.visibility = "visible";
        this.btnB.style.visibility = "visible";
        this.btnC.style.visibility = "visible";
        this.btnD.style.visibility = "visible";
    }
    SetDefaultTextForButtons() {
        this.btnA.innerHTML = "A";
        this.btnB.innerHTML = "B";
        this.btnC.innerHTML = "C";
        this.btnD.innerHTML = "D";
    }
};
let buttons = new Buttons();