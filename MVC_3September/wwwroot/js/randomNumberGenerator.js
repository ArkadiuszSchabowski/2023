class RandomNumberGenerator {
    SetRandomNumber() {
        return Math.floor(Math.random() * 2);
    }
    SetRandomNumberForAudience() {
        let numberA = Math.floor(Math.random() * 100);
        let numberB = Math.floor(Math.random() * (100 - numberA));
        let numberC = Math.floor(Math.random() * (100 - (numberA + numberB)));
        let numberD = 100 - (numberA + numberB + numberC);
        let audience = [numberA, numberB, numberC, numberD]
        return audience;
    }
}
let randomNumberGenerator = new RandomNumberGenerator();