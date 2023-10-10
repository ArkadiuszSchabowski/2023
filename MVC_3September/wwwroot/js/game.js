
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
                this.SetQuestion(this.questions1);
                break;

            case 2:
                this.SetQuestion(this.questions2);
                this.prizeTable.childNodes[9].style.backgroundColor = "green";
                break;

            case 3:
                this.SetQuestion(this.questions3);
                this.prizeTable.childNodes[8].style.backgroundColor = "rgb(11, 221, 11)";
                break;

            case 4:
                this.SetQuestion(this.questions4);
                this.prizeTable.childNodes[7].style.backgroundColor = "green";
                break;

            case 5:
                this.SetQuestion(this.questions5);
                this.prizeTable.childNodes[6].style.backgroundColor = "green";
                break;

            case 6:
                this.SetQuestion(this.questions6);
                this.prizeTable.childNodes[5].style.backgroundColor = "rgb(11, 221, 11)";
                break;

            case 7:
                this.SetQuestion(this.questions7);
                this.prizeTable.childNodes[4].style.backgroundColor = "green";
                break;

            case 8:
                this.SetQuestion(this.questions8);
                this.prizeTable.childNodes[3].style.backgroundColor = "green";
                break;

            case 9:
                this.SetQuestion(this.questions9);
                this.prizeTable.childNodes[2].style.backgroundColor = "green";
                break;

            case 10:
                this.SetQuestion(this.questions10);
                this.prizeTable.childNodes[1].style.backgroundColor = "green";
                break;

            case 11:
                this.AllCorrectAnswers();
                this.prizeTable.childNodes[0].style.backgroundColor = "green";
                break;
        }
    }

    SetQuestion = (questionData) => {

        switch (this.questionNumber) {
            case 1:
                this.SetQuestionContent(questionData);
                this.SetFirstQuestionListeners();
                break;
            case 2:
                this.RemoveFirstQuestionListeners();
                this.balance = balance.SetCurrentBalance(500);
                this.SetQuestionContent(questionData);
                this.SetSecondQuestionListeners();
                break;
            case 3:
                this.RemoveSecondQuestionListeners();
                this.balance = balance.SetCurrentBalance(500);
                this.SetQuestionContent(questionData);
                this.SetThirdQuestionListeners();
                break;
            case 4:
                this.RemoveThirdQuestionListeners();
                this.balance = balance.SetCurrentBalance(500);
                this.SetQuestionContent(questionData);
                this.SetFourthQuestionListeners();
                break;
            case 5:
                this.RemoveFourthQuestionListeners();
                this.balance = balance.SetCurrentBalance(500);
                this.SetQuestionContent(questionData);
                this.SetFifthQuestionListeners();
                break;
            case 6:
                this.RemoveFifthQuestionListeners();
                this.balance = balance.SetCurrentBalance(500);
                this.SetQuestionContent(questionData);
                this.SetSixthQuestionListeners();
                break;
            case 7:
                this.RemoveSixthQuestionListeners();
                this.balance = balance.SetCurrentBalance(500);
                this.SetQuestionContent(questionData);
                this.SetSeventhQuestionListeners();
                break;
            case 8:
                this.RemoveSeventhQuestionListeners();
                this.balance = balance.SetCurrentBalance(500);
                this.SetQuestionContent(questionData);
                this.SetEighthQuestionListeners();
                break;
            case 9:
                this.RemoveEighthQuestionListeners();
                this.balance = balance.SetCurrentBalance(500);
                this.SetQuestionContent(questionData);
                this.SetNinethQuestionListeners();
                break;
            case 10:
                this.RemoveNinethQuestionListeners();
                this.balance = balance.SetCurrentBalance(500);
                this.SetQuestionContent(questionData);
                this.SetTenthQuestionListeners();
                break;
        }
    }
    AllCorrectAnswers() {

        this.RemoveTenthQuestionListeners();

        this.balance = balance.SetCurrentBalance(1000000);

        this.questionWindow.innerHTML = ` Odpowiedziales poprawnie na wszystkie pytania!Twoj wynik to ${this.balance} zl!`;

        this.SetDefaultTextForButtons();
    }

    EndGameWhenAnswerIsIncorrect = () => {

        this.RemoveAllListenersWhenGameEnded();

        switch (this.questionNumber) {
            case 3:
                this.balance = balance.SetStartBalance();
                this.prizeTable.childNodes[9].style.backgroundColor = "blueviolet";
                break;
            case 4:
            case 5:
                this.balance = balance.SetBalanceToFirstCheckpoint();
                for (let i = 6; i < 8; i++) {
                this.prizeTable.childNodes[i].style.backgroundColor = "blueviolet";
                }
                break;
            case 8:
            case 9:
            case 10:
            case 11:
                this.balance = balance.SetBalanceToSecondCheckpoint();
                for (let i = 1; i < 5; i++) {
                    this.prizeTable.childNodes[i].style.backgroundColor = "blueviolet";
                }
                break;
        }

        this.questionWindow.innerHTML = `Dziekujemy za gre! Twoj wynik to ${this.balance} zl!`;

        this.SetDefaultTextForButtons();
    }
    SetQuestionContent(questionData) {

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        this.questionWindow.innerHTML = questionData[this.randomNumber].question;
        this.btnA.innerHTML = questionData[this.randomNumber].answers[0];
        this.btnB.innerHTML = questionData[this.randomNumber].answers[1];
        this.btnC.innerHTML = questionData[this.randomNumber].answers[2];
        this.btnD.innerHTML = questionData[this.randomNumber].answers[3];

        this.questionNumber++;
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