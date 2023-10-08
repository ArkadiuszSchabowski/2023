

class Lifelines {
    constructor(randomNumberGenerator) {
        this.randomNumber = randomNumberGenerator;
    }

    AudienceHelp() {
        return randomNumberGenerator.SetRandomNumberForAudience();
    }

    FiftyFiftyHelp(){
        
    }
    PhoneFriend() {

    }
}
let lifelines = new Lifelines(randomNumberGenerator);