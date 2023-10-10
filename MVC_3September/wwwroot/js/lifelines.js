

class Lifelines {
    constructor(randomNumberGenerator, buttons) {
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
                this.result = randomNumberGenerator.SetRandomNumberForFiftyFifty();
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
            else {
                this.questionWindow.innerHTML = ("Nie masz juz kola 50/50");
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
                this.result = randomNumberGenerator.SetRandomNumberForAudience();
                this.questionWindow.innerHTML = `A: ${this.result[0]}%, B: ${this.result[1]}%, C: ${this.result[2]}%, D: ${this.result[3]}%.`;
                buttons.btnAudience.style.backgroundColor = "red";
                this.audience = false;
            }
            else {
                this.questionWindow.innerHTML = ("Skorzystales juz z pomocy publicznosci");
            }
        }
        )
    };
    PhoneFriend() {
        buttons.btnPhone.addEventListener("click", () => {
            if (this.phone) {
                this.result = randomNumberGenerator.SetRandomNumberForFriend();
                this.questionWindow.innerHTML = this.result;
                buttons.btnPhone.style.backgroundColor = "red";
                this.phone = false;
            }
            else {
                this.questionWindow.innerHTML = ("Juz dzwoniles do przyjaciela");
            }
        }
        )
    };
}
let lifelines = new Lifelines(randomNumberGenerator, buttons);