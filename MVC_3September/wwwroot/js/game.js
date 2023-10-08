
class Game {
    TheCorrectAnswerIsA() {
        this.btnA.addEventListener("click", this.myListener);
        this.btnB.addEventListener("click", this.EndGame);
        this.btnC.addEventListener("click", this.EndGame);
        this.btnD.addEventListener("click", this.EndGame);
    }
    TheCorrectAnswerIsB() {
        this.btnA.addEventListener("click", this.EndGame);
        this.btnB.addEventListener("click", this.myListener);
        this.btnC.addEventListener("click", this.EndGame);
        this.btnD.addEventListener("click", this.EndGame);
    }
    TheCorrectAnswerIsC() {
        this.btnA.addEventListener("click", this.EndGame);
        this.btnB.addEventListener("click", this.EndGame);
        this.btnC.addEventListener("click", this.myListener);
        this.btnD.addEventListener("click", this.EndGame);
    }
    TheCorrectAnswerIsD() {
        this.btnA.addEventListener("click", this.EndGame);
        this.btnB.addEventListener("click", this.EndGame);
        this.btnC.addEventListener("click", this.EndGame);
        this.btnD.addEventListener("click", this.myListener);
    }

    RemoveListenersWhenTheCorrectAnswerWasA() {
        this.btnA.removeEventListener("click", this.myListener);
        this.btnB.removeEventListener("click", this.EndGame);
        this.btnC.removeEventListener("click", this.EndGame);
        this.btnD.removeEventListener("click", this.EndGame);
    }
    RemoveListenersWhenTheCorrectAnswerWasB() {
        this.btnA.removeEventListener("click", this.EndGame);
        this.btnB.removeEventListener("click", this.myListener);
        this.btnC.removeEventListener("click", this.EndGame);
        this.btnD.removeEventListener("click", this.EndGame);
    }
    RemoveListenersWhenTheCorrectAnswerWasC() {
        this.btnA.removeEventListener("click", this.EndGame);
        this.btnB.removeEventListener("click", this.EndGame);
        this.btnC.removeEventListener("click", this.myListener);
        this.btnD.removeEventListener("click", this.EndGame);
    }
    RemoveListenersWhenTheCorrectAnswerWasD() {
        this.btnA.removeEventListener("click", this.EndGame);
        this.btnB.removeEventListener("click", this.EndGame);
        this.btnC.removeEventListener("click", this.EndGame);
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

    //Nowe
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

    constructor(prizeTableDiv) {
        this.balance = 0;
        this.questionNumber = 1;
        this.data;
        this.randomNumber;
        this.questionWindow = document.querySelector("#questionWindow");
        this.btnA = document.querySelector("#btnA");
        this.btnB = document.querySelector("#btnB");
        this.btnC = document.querySelector("#btnC");
        this.btnD = document.querySelector("#btnD");
        this.easyQuestions = [];
        this.mediumQuestions = [];
        this.advancedQuestions = [];
        this.hardQuestions = [];
        this.expertQuestions = [];
        this.myListener = () => this.SetQuestionOnArrays(this.data);
        this.prizeTable = prizeTableDiv;

        this.Init();
    }

    Init = () => {
        this.GetContent();
    }

    GetContent = async () => {
        try {
            let response = await fetch("/FirstQuestions/GetQuestions");
            this.data = await response.json();
            this.SetQuestionOnArrays(this.data);
        } catch (error) {
            console.error("Wystąpił błąd podczas pobierania danych:", error);

            this.questionWindow.innerHTML = "Wystąpił błąd podczas pobierania danych. Sprawdź połączenie z internetem lub spróbuj ponownie później.";
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

            //Nowe
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
    SetQuestionContent(lvlQuestions) {

        this.questionWindow.innerHTML = lvlQuestions[this.randomNumber].question;
        this.btnA.innerHTML = lvlQuestions[this.randomNumber].answers[0];
        this.btnB.innerHTML = lvlQuestions[this.randomNumber].answers[1];
        this.btnC.innerHTML = lvlQuestions[this.randomNumber].answers[2];
        this.btnD.innerHTML = lvlQuestions[this.randomNumber].answers[3];
    }

    SetFirstQuestion = (lvlQuestions) => {

        console.log(this.balance + " balance");
        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetFirstQuestionListeners();
    }

    SetSecondQuestion = (lvlQuestions) => {

        this.balance += 500;
        console.log(this.balance);
        this.RemoveFirstQuestionListeners();

        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetSecondQuestionListeners();
    }

    SetThirdQuestion = (lvlQuestions) => {

        this.balance += 1500;
        console.log(this.balance);
        this.RemoveSecondQuestionListeners();

        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetThirdQuestionListeners();
    }
    SetFourthQuestion = (lvlQuestions) => {

        this.balance += 3000;
        console.log(this.balance);
        this.RemoveThirdQuestionListeners();

        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetFourthQuestionListeners();
    }

    SetFifthQuestion(lvlQuestions) {

        this.balance += 5000;
        console.log(this.balance);
        this.RemoveFourthQuestionListeners();

        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetFifthQuestionListeners();
    }
    //Nowe
    SetSixthQuestion(lvlQuestions) {

        this.balance += 30000;
        console.log(this.balance);
        this.RemoveFifthQuestionListeners();

        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetSixthQuestionListeners();
    }
    SetSeventhQuestion(lvlQuestions) {

        this.balance += 35000;
        console.log(this.balance);
        this.RemoveSixthQuestionListeners();

        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetSeventhQuestionListeners();
    }
    SetEighthQuestion(lvlQuestions) {
        this.balance += 75000;
        console.log(this.balance);
        this.RemoveSeventhQuestionListeners();

        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetEighthQuestionListeners();
    }
    SetNinethQuestion(lvlQuestions) {

        this.balance += 100000;
        console.log(this.balance);
        this.RemoveEighthQuestionListeners();

        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetNinethQuestionListeners();
    }
    SetTenthQuestion(lvlQuestions) {

        this.balance += 250000;
        console.log(this.balance);
        this.RemoveNinethQuestionListeners();

        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetTenthQuestionListeners();
    }
    AllCorrectAnswers() {

        this.RemoveTenthQuestionListeners();

        this.balance += 500000;
        console.log(this.balance);

        this.questionWindow.innerHTML = `
        Odpowiedziales poprawnie na wszystkie pytania!
        Twoj wynik to ${this.balance} zl!`;

        this.SetDefaultTextForButtons();
    }

    EndGame =() => {
        this.btnA.removeEventListener("click", this.myListener);
        this.btnB.removeEventListener("click", this.myListener);
        this.btnC.removeEventListener("click", this.myListener);
        this.btnD.removeEventListener("click", this.myListener);

        this.questionWindow.innerHTML = `
    Dziekujemy za gre!
    Twoj wynik to ${this.balance} zl!`;

        this.SetDefaultTextForButtons();
    }


    SetRandomNumber = () => {
        return Math.floor(Math.random() * 2);
    }
    SetDefaultTextForButtons() {
        this.btnA.innerHTML = "A";
        this.btnB.innerHTML = "B";
        this.btnC.innerHTML = "C";
        this.btnD.innerHTML = "D";
    }
}

const game = new Game(prizeTableDiv);