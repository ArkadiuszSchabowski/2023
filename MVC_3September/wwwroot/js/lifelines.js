

class Lifelines {
    constructor(randomNumberGenerator, buttons, game) {
        this.game = game;
        this.randomNumber = randomNumberGenerator;
        this.result;

        this.questionWindow = document.querySelector("#questionWindow");

        this.audience = true;
        this.phone = true;
        this.fiftyFifty = true;
    }
    FiftyFifty() {
        buttons.btnFiftyFifty.addEventListener("click", () => {
            if (this.fiftyFifty) {
                console.log(game.correctedIndex);
                this.result = randomNumberGenerator.SetRandomNumberForFiftyFifty(game.correctedIndex);
                if (this.result.includes(0)) {
                    buttons.btnA.style.visibility = "hidden";
                }
                if (this.result.includes(1)) {
                    buttons.btnB.style.visibility = "hidden";
                }
                if (this.result.includes(2)) {
                    buttons.btnC.style.visibility = "hidden";
                }
                if (this.result.includes(3)) {
                    buttons.btnD.style.visibility = "hidden";
                }

                console.log(this.result);
                buttons.btnFiftyFifty.style.backgroundColor = "red";
                this.fiftyFifty = false;
            }
        }
        )
    };
    AddLifelines() {
        this.Audience();
        this.FiftyFifty()
        this.PhoneFriend();
    }
    Audience() {
        buttons.btnAudience.addEventListener("click", () => {
            if (this.audience) {
                if (this.fiftyFifty) {

                    this.result = randomNumberGenerator.SetRandomNumberForAudience();
                    this.questionWindow.innerHTML = `A: ${this.result[0]}%, B: ${this.result[1]}%, C: ${this.result[2]}%, D: ${this.result[3]}%.`;
                }
                else {
                    this.questionWindow.innerHTML = "Tym razem glosy publicznosci dla kazdego przypadku wynosza dokladnie tyle samo %. Przed Toba ciezka decyzja."
                }
                buttons.btnAudience.style.backgroundColor = "red";
                this.audience = false;
            }
        }
        )
    };
    PhoneFriend() {
        buttons.btnPhone.addEventListener("click", () => {
            if (this.phone) {
                if (this.fiftyFifty) {
                    this.result = randomNumberGenerator.SetRandomMessageForFriend();
                    this.questionWindow.innerHTML = this.result;
                }
                if (!this.fiftyFifty) {
                    this.questionWindow.innerHTML = "Przyjaciel: Niestety nie wiem, nie pomoge. Moze sproboj zaryzkowac."
                }
                this.phone = false;
                buttons.btnPhone.style.backgroundColor = "red";
            }
        }
        )
    };
}
let lifelines = new Lifelines(randomNumberGenerator, buttons);