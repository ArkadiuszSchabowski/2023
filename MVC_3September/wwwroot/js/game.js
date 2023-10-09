
class Game {

    constructor(prizeTableDiv, lifelines) {
        this.balance = 0;
        this.questionNumber = 0;
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

        this.btnAudience = document.querySelector("#btnAudience");
        this.audience = true;

        this.AddLifelines();

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
    AddLifelines() {
        this.Audience();
        this.FiftyFifty()
        this.PhoneFriend();
    }
    Audience() {
        btnAudience.addEventListener("click", () => {
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

    FiftyFifty() {

    }
    PhoneFriend() {

    }

    SetFirstQuestion = (lvlQuestions) => {

        this.randomNumber = randomNumberGenerator.SetRandomNumber();
        console.log(this.randomNumber);
        console.log(this.questionNumber);

        this.SetQuestionContent(lvlQuestions);

        this.SetFirstQuestionListeners();
    }

    SetSecondQuestion = (lvlQuestions) => {

        this.balance += 500;
        this.RemoveFirstQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        console.log(this.randomNumber);
        console.log(this.questionNumber);

        this.SetQuestionContent(lvlQuestions);

        this.SetSecondQuestionListeners();

    }

    SetThirdQuestion = (lvlQuestions) => {

        this.balance += 1500;
        this.RemoveSecondQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        console.log(this.randomNumber);
        console.log(this.questionNumber);

        this.SetQuestionContent(lvlQuestions);

        this.SetThirdQuestionListeners();
    }
    SetFourthQuestion = (lvlQuestions) => {

        this.balance += 3000;
        this.RemoveThirdQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        console.log(this.randomNumber);
        console.log(this.questionNumber);

        this.SetQuestionContent(lvlQuestions);

        this.SetFourthQuestionListeners();
    }

    SetFifthQuestion(lvlQuestions) {

        this.balance += 5000;
        this.RemoveFourthQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetFifthQuestionListeners();
    }

    SetSixthQuestion(lvlQuestions) {

        this.balance += 30000;
        this.RemoveFifthQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetSixthQuestionListeners();
    }
    SetSeventhQuestion(lvlQuestions) {

        this.balance += 35000;
        this.RemoveSixthQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetSeventhQuestionListeners();
    }
    SetEighthQuestion(lvlQuestions) {
        this.balance += 75000;
        this.RemoveSeventhQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetEighthQuestionListeners();
    }
    SetNinethQuestion(lvlQuestions) {

        this.balance += 100000;
        this.RemoveEighthQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetNinethQuestionListeners();
    }
    SetTenthQuestion(lvlQuestions) {

        this.balance += 250000;
        this.RemoveNinethQuestionListeners();

        this.randomNumber = randomNumberGenerator.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetTenthQuestionListeners();
    }
    AllCorrectAnswers() {

        this.RemoveTenthQuestionListeners();

        this.balance += 500000;

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
            case 0:
                this.SetFirstQuestion(this.questions1);
                this.questionNumber++;
                break;

            case 1:
                this.SetSecondQuestion(this.questions2);
                this.prizeTable.childNodes[9].style.backgroundColor = "green";
                this.questionNumber++;
                break;

            case 2:
                this.SetThirdQuestion(this.questions3);
                this.questionNumber++;
                this.prizeTable.childNodes[8].style.backgroundColor = "rgb(11, 221, 11)";
                break;

            case 3:
                this.SetFourthQuestion(this.questions4);
                this.questionNumber++;
                this.prizeTable.childNodes[7].style.backgroundColor = "green";
                break;

            case 4:
                this.SetFifthQuestion(this.questions5);
                this.prizeTable.childNodes[6].style.backgroundColor = "green";
                this.questionNumber++;
                break;

            case 5:
                this.SetSixthQuestion(this.questions6);
                this.prizeTable.childNodes[5].style.backgroundColor = "rgb(11, 221, 11)";
                this.questionNumber++;
                break;

            case 6:
                this.SetSeventhQuestion(this.questions7);
                this.prizeTable.childNodes[4].style.backgroundColor = "green";
                this.questionNumber++;
                break;

            case 7:
                this.SetEighthQuestion(this.questions8);
                this.prizeTable.childNodes[3].style.backgroundColor = "green";
                this.questionNumber++;
                break;

            case 8:
                this.SetNinethQuestion(this.questions9);
                this.prizeTable.childNodes[2].style.backgroundColor = "green";
                this.questionNumber++;
                break;

            case 9:
                this.SetTenthQuestion(this.questions10);
                this.prizeTable.childNodes[1].style.backgroundColor = "green";
                this.questionNumber++;
                break;

            case 10:
                this.AllCorrectAnswers();
                this.prizeTable.childNodes[0].style.backgroundColor = "green";
                break;
        }
    }

    EndGameWhenAnswerIsIncorrect = () => {

        this.RemoveAllListenersWhenGameEnded();

        if (this.questionNumber == 2) {
            this.balance = 0;
            this.prizeTable.childNodes[9].style.backgroundColor = "blueviolet";
        }
        else if ((this.questionNumber == 4) || (this.questionNumber == 5)) {
            this.balance = 2000;
            this.prizeTable.childNodes[7].style.backgroundColor = "blueviolet";
            this.prizeTable.childNodes[6].style.backgroundColor = "blueviolet";
        }
        else if ((this.questionNumber == 7) || (this.questionNumber == 8) || (this.questionNumber == 9) || (this.questionNumber == 10)) {
            this.balance = 40000;
            this.prizeTable.childNodes[4].style.backgroundColor = "blueviolet";
            this.prizeTable.childNodes[3].style.backgroundColor = "blueviolet";
            this.prizeTable.childNodes[2].style.backgroundColor = "blueviolet";
            this.prizeTable.childNodes[1].style.backgroundColor = "blueviolet";
        }

        this.questionWindow.innerHTML = `Dziekujemy za gre! Twoj wynik to ${this.balance} zl!`;

        this.SetDefaultTextForButtons();
    }
    SetQuestionContent(lvlQuestions) {

        this.questionWindow.innerHTML = lvlQuestions[this.randomNumber].question;
        this.btnA.innerHTML = lvlQuestions[this.randomNumber].answers[0];
        this.btnB.innerHTML = lvlQuestions[this.randomNumber].answers[1];
        this.btnC.innerHTML = lvlQuestions[this.randomNumber].answers[2];
        this.btnD.innerHTML = lvlQuestions[this.randomNumber].answers[3];
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
const game = new Game(prizeTableDiv, randomNumberGenerator, lifelines);