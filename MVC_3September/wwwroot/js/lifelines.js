

class Lifelines {
    constructor(randomNumberGenerator) {
        this.randomNumber = randomNumberGenerator;
        this.btnAudience = document.querySelector("#btnAudience");
        this.audience = true;
    }
    AddLifelines() {
        this.Audience();
        this.FiftyFifty()
        this.PhoneFriend();
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

    AudienceHelp() {
        return randomNumberGenerator.SetRandomNumberForAudience();
    }

    FiftyFifty() {

    }
    PhoneFriend() {

    }


    FiftyFiftyHelp(){
        
    }
}
let lifelines = new Lifelines(randomNumberGenerator);