

class Lifelines {
    constructor(randomNumberGenerator) {
        this.randomNumber = randomNumberGenerator;

        this.btnAudience = document.querySelector("#btnAudience");
        this.btnPhone = document.querySelector("#btnPhone");
        this.btnFiftyFifty = document.querySelector("#btnFiftyFifty");

        this.audience = true;
        this.phone = true;
        this.fiftyFifty = true;
    }
    AddLifelines() {
        this.Audience();
        this.FiftyFifty()
        this.PhoneFriend();
    }
    AudienceHelp() {
        return randomNumberGenerator.SetRandomNumberForAudience();
    }
    Audience() {
        this.btnAudience.addEventListener("click", () => {
            if (this.audience) {
                let result = lifelines.AudienceHelp();
                console.log(result);
                btnAudience.style.backgroundColor = "red";
                this.audience = false;
            }
            else {
                console.log("Nie masz juz kola - pytanie do publicznosci");
            }
        }
        )
    };
    PhoneFriend() {
        this.btnPhone.addEventListener("click", () => {
            if (this.phone) {
                btnPhone.style.backgroundColor = "red";
                this.phone = false;
            }
            else {
                console.log("Nie masz juz kola - telefon do przyjaciela");
            }
        }
        )
    };
    FiftyFifty() {
        this.btnFiftyFifty.addEventListener("click", () => {
            if (this.fiftyFifty) {
                btnFiftyFifty.style.backgroundColor = "red";
                this.fiftyFifty = false;
            }
            else {
                console.log("Nie masz juz kola -  50/50");
            }
        }
        )
    };
}
let lifelines = new Lifelines(randomNumberGenerator);