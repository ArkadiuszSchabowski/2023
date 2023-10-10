
class Game {

    constructor(prizeTableDiv, randomNumberGenerator, balance, lifelines) {
        this.balance;
        this.questionNumber = 1;
        this.data;
        this.randomNumber;
        this.questionWindow = document.querySelector("#questionWindow");
        this.btnA = document.querySelector("#btnA");
        this.btnB = document.querySelector("#btnB");
        this.btnC = document.querySelector("#btnC");
        this.btnD = document.querySelector("#btnD");

        this.myListener = () => this.SetQuestionOnArrays(this.data);
        this.prizeTable = prizeTableDiv;
        this.lifelines;

        lifelines.AddLifelines();

        this.Init();
    }
    Init = () => {
        this.GetContent();
    }

    GetContent = async () => {
        try {
            let response = await fetch("/Questions/GetQuestions");
            this.data = await response.json();
            this.SetQuestionOnArrays(this.data);
            console.log(this.data);
        } catch (error) {
            console.error("Wystąpił błąd podczas pobierania danych:", error);

            this.questionWindow.innerHTML = "Wystąpił błąd podczas pobierania danych.";
        }
    }

    SetFirstQuestion = (questionData) => {

        this.randomNumber = randomNumberGenerator.SetRandomNumber();
        console.log(this.randomNumber);
        console.log(this.questionNumber);

        this.SetQuestionContent(questionData);

        this.SetFirstQuestionListeners();
    }

    SetSecondQuestion = (questionData) => {

        this.balance = balance.SetCurrentBalance(500);
        this.RemoveFirstQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        console.log(this.randomNumber);
        console.log(this.questionNumber);

        this.SetQuestionContent(questionData);

        this.SetSecondQuestionListeners();

    }

    SetThirdQuestion = (questionData) => {

        this.balance = balance.SetCurrentBalance(2000);
        this.RemoveSecondQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        console.log(this.randomNumber);
        console.log(this.questionNumber);

        this.SetQuestionContent(questionData);

        this.SetThirdQuestionListeners();
    }
    SetFourthQuestion = (questionData) => {

        this.balance = balance.SetCurrentBalance(5000);
        this.RemoveThirdQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        console.log(this.randomNumber);
        console.log(this.questionNumber);

        this.SetQuestionContent(questionData);

        this.SetFourthQuestionListeners();
    }

    SetFifthQuestion(questionData) {

        this.balance = balance.SetCurrentBalance(10000);
        this.RemoveFourthQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        this.SetQuestionContent(questionData);

        this.SetFifthQuestionListeners();
    }

    SetSixthQuestion(questionData) {

        this.balance = balance.SetCurrentBalance(40000);
        this.RemoveFifthQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        this.SetQuestionContent(questionData);

        this.SetSixthQuestionListeners();
    }
    SetSeventhQuestion(questionData) {

        this.balance = balance.SetCurrentBalance(75000);
        this.RemoveSixthQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        this.SetQuestionContent(questionData);

        this.SetSeventhQuestionListeners();
    }
    SetEighthQuestion(questionData) {
        this.balance = balance.SetCurrentBalance(150000);
        this.RemoveSeventhQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        this.SetQuestionContent(questionData);

        this.SetEighthQuestionListeners();
    }
    SetNinethQuestion(questionData) {

        this.balance = balance.SetCurrentBalance(250000);
        this.RemoveEighthQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        this.SetQuestionContent(questionData);

        this.SetNinethQuestionListeners();
    }
    SetTenthQuestion(questionData) {

        this.balance = balance.SetCurrentBalance(500000);
        this.RemoveNinethQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        this.SetQuestionContent(questionData);

        this.SetTenthQuestionListeners();
    }
    AllCorrectAnswers() {

        this.RemoveTenthQuestionListeners();

        this.balance = balance.SetCurrentBalance(1000000);

        this.questionWindow.innerHTML = `
        Odpowiedziales poprawnie na wszystkie pytania!
        Twoj wynik to ${this.balance} zl!`;

        this.SetDefaultTextForButtons();
    }


    SetQuestionOnArrays = (data) => {

        this.questions1 = [this.data[0], this.data[1]];
        this.questions2 = [this.data[2], this.data[3]];
        this.questions3 = [this.data[4], this.data[5]];
        this.questions4 = [this.data[6], this.data[7]];
        this.questions5 = [this.data[8], this.data[9]];
        this.questions6 = [this.data[10], this.data[11]];
        this.questions7 = [this.data[12], this.data[13]];
        this.questions8 = [this.data[14], this.data[15]];
        this.questions9 = [this.data[16], this.data[17]];
        this.questions10 = [this.data[18], this.data[19]];

        switch (this.questionNumber) {
            case 1:
                this.SetFirstQuestion(this.questions1);
                this.questionNumber++;
                break;

            case 2:
                this.SetSecondQuestion(this.questions2);
                this.prizeTable.childNodes[9].style.backgroundColor = "green";
                this.questionNumber++;
                break;

            case 3:
                this.SetThirdQuestion(this.questions3);
                this.questionNumber++;
                this.prizeTable.childNodes[8].style.backgroundColor = "rgb(11, 221, 11)";
                break;

            case 4:
                this.SetFourthQuestion(this.questions4);
                this.questionNumber++;
                this.prizeTable.childNodes[7].style.backgroundColor = "green";
                break;

            case 5:
                this.SetFifthQuestion(this.questions5);
                this.prizeTable.childNodes[6].style.backgroundColor = "green";
                this.questionNumber++;
                break;

            case 6:
                this.SetSixthQuestion(this.questions6);
                this.prizeTable.childNodes[5].style.backgroundColor = "rgb(11, 221, 11)";
                this.questionNumber++;
                break;

            case 7:
                this.SetSeventhQuestion(this.questions7);
                this.prizeTable.childNodes[4].style.backgroundColor = "green";
                this.questionNumber++;
                break;

            case 8:
                this.SetEighthQuestion(this.questions8);
                this.prizeTable.childNodes[3].style.backgroundColor = "green";
                this.questionNumber++;
                break;

            case 9:
                this.SetNinethQuestion(this.questions9);
                this.prizeTable.childNodes[2].style.backgroundColor = "green";
                this.questionNumber++;
                break;

            case 10:
                this.SetTenthQuestion(this.questions10);
                this.prizeTable.childNodes[1].style.backgroundColor = "green";
                this.questionNumber++;
                break;

            case 11:
                this.AllCorrectAnswers();
                this.prizeTable.childNodes[0].style.backgroundColor = "green";
                break;
        }
    }

    EndGameWhenAnswerIsIncorrect = () => {

        this.RemoveAllListenersWhenGameEnded();

        if (this.questionNumber == 3) {
            this.balance = balance.SetStartBalance();
            this.prizeTable.childNodes[9].style.backgroundColor = "blueviolet";
        }
        else if ((this.questionNumber == 5) || (this.questionNumber == 6)) {
            this.balance = balance.SetBalanceToFirstCheckpoint();
            this.prizeTable.childNodes[7].style.backgroundColor = "blueviolet";
            this.prizeTable.childNodes[6].style.backgroundColor = "blueviolet";
        }
        else if ((this.questionNumber == 8) || (this.questionNumber == 9) || (this.questionNumber == 10) || (this.questionNumber == 11)) {
            this.balance = balance.SetBalanceToSecondCheckpoint();
            this.prizeTable.childNodes[4].style.backgroundColor = "blueviolet";
            this.prizeTable.childNodes[3].style.backgroundColor = "blueviolet";
            this.prizeTable.childNodes[2].style.backgroundColor = "blueviolet";
            this.prizeTable.childNodes[1].style.backgroundColor = "blueviolet";
        }

        this.questionWindow.innerHTML = `Dziekujemy za gre! Twoj wynik to ${this.balance} zl!`;

        this.SetDefaultTextForButtons();
    }
    SetQuestionContent(questionData) {

        this.questionWindow.innerHTML = questionData[this.randomNumber].question;
        this.btnA.innerHTML = questionData[this.randomNumber].answers[0];
        this.btnB.innerHTML = questionData[this.randomNumber].answers[1];
        this.btnC.innerHTML = questionData[this.randomNumber].answers[2];
        this.btnD.innerHTML = questionData[this.randomNumber].answers[3];
    }

    SetDefaultTextForButtons() {
        this.btnA.innerHTML = "A";
        this.btnB.innerHTML = "B";
        this.btnC.innerHTML = "C";
        this.btnD.innerHTML = "D";
    }
    TheCorrectAnswerIsA() {
        this.btnA.addEventListener("click", this.myListener);
        this.btnB.addEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnC.addEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnD.addEventListener("click", this.EndGameWhenAnswerIsIncorrect);
    }
    TheCorrectAnswerIsB() {
        this.btnA.addEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnB.addEventListener("click", this.myListener);
        this.btnC.addEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnD.addEventListener("click", this.EndGameWhenAnswerIsIncorrect);
    }
    TheCorrectAnswerIsC() {
        this.btnA.addEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnB.addEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnC.addEventListener("click", this.myListener);
        this.btnD.addEventListener("click", this.EndGameWhenAnswerIsIncorrect);
    }
    TheCorrectAnswerIsD() {
        this.btnA.addEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnB.addEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnC.addEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnD.addEventListener("click", this.myListener);
    }

    RemoveListenersWhenTheCorrectAnswerWasA() {
        this.btnA.removeEventListener("click", this.myListener);
        this.btnB.removeEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnC.removeEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnD.removeEventListener("click", this.EndGameWhenAnswerIsIncorrect);
    }
    RemoveListenersWhenTheCorrectAnswerWasB() {
        this.btnA.removeEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnB.removeEventListener("click", this.myListener);
        this.btnC.removeEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnD.removeEventListener("click", this.EndGameWhenAnswerIsIncorrect);
    }
    RemoveListenersWhenTheCorrectAnswerWasC() {
        this.btnA.removeEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnB.removeEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnC.removeEventListener("click", this.myListener);
        this.btnD.removeEventListener("click", this.EndGameWhenAnswerIsIncorrect);
    }
    RemoveListenersWhenTheCorrectAnswerWasD() {
        this.btnA.removeEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnB.removeEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnC.removeEventListener("click", this.EndGameWhenAnswerIsIncorrect);
        this.btnD.removeEventListener("click", this.myListener);
    }
    RemoveAllListenersWhenGameEnded() {
        this.btnA.removeEventListener("click", this.myListener);
        this.btnB.removeEventListener("click", this.myListener);
        this.btnC.removeEventListener("click", this.myListener);
        this.btnD.removeEventListener("click", this.myListener);
    }

    SetFirstQuestionListeners() {
        this.TheCorrectAnswerIsB();
    }
    RemoveFirstQuestionListeners() {
        this.RemoveListenersWhenTheCorrectAnswerWasB();
    }

    SetSecondQuestionListeners() {
        this.TheCorrectAnswerIsC();
    }
    RemoveSecondQuestionListeners() {
        this.RemoveListenersWhenTheCorrectAnswerWasC();
    }
    SetThirdQuestionListeners() {
        this.TheCorrectAnswerIsA();
    }
    RemoveThirdQuestionListeners() {
        this.RemoveListenersWhenTheCorrectAnswerWasA();
    }
    SetFourthQuestionListeners() {
        this.TheCorrectAnswerIsD();
    }
    RemoveFourthQuestionListeners() {
        this.RemoveListenersWhenTheCorrectAnswerWasD();
    }
    SetFifthQuestionListeners() {
        this.TheCorrectAnswerIsA();
    }
    RemoveFifthQuestionListeners() {
        this.RemoveListenersWhenTheCorrectAnswerWasA();
    }

    SetSixthQuestionListeners() {
        this.TheCorrectAnswerIsA();
    }
    RemoveSixthQuestionListeners() {
        this.RemoveListenersWhenTheCorrectAnswerWasA();
    }
    SetSeventhQuestionListeners() {
        this.TheCorrectAnswerIsC();
    }
    RemoveSeventhQuestionListeners() {
        this.RemoveListenersWhenTheCorrectAnswerWasC();
    }
    SetEighthQuestionListeners() {
        this.TheCorrectAnswerIsB();
    }
    RemoveEighthQuestionListeners() {
        this.RemoveListenersWhenTheCorrectAnswerWasB();
    }
    SetNinethQuestionListeners() {
        this.TheCorrectAnswerIsD();
    }
    RemoveNinethQuestionListeners() {
        this.RemoveListenersWhenTheCorrectAnswerWasD();
    }
    SetTenthQuestionListeners() {
        this.TheCorrectAnswerIsC();
    }
    RemoveTenthQuestionListeners() {
        this.RemoveListenersWhenTheCorrectAnswerWasC();
    }

}
const game = new Game(prizeTableDiv, randomNumberGenerator, balance, lifelines);