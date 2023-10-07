
class Game {

    SetFirstQuestionListeners() {
        {
            this.btnA.addEventListener("click", this.EndGame);
            this.btnB.addEventListener("click", this.myListener);
            this.btnC.addEventListener("click", this.EndGame);
            this.btnD.addEventListener("click", this.EndGame);
        }
    }
    RemoveFirstQuestionListeners() {
        this.btnA.removeEventListener("click", this.EndGame);
        this.btnB.removeEventListener("click", this.myListener);
        this.btnC.removeEventListener("click", this.EndGame);
        this.btnD.removeEventListener("click", this.EndGame);
    }

    SetSecondQuestionListeners() {
        this.btnA.addEventListener("click", this.myListener);
        this.btnB.addEventListener("click", this.EndGame);
        this.btnC.addEventListener("click", this.EndGame);
        this.btnD.addEventListener("click", this.EndGame);
    }
    RemoveSecondQuestionListeners() {
        this.btnA.removeEventListener("click", this.myListener);
        this.btnB.removeEventListener("click", this.EndGame);
        this.btnC.removeEventListener("click", this.EndGame);
        this.btnD.removeEventListener("click", this.EndGame);
    }
    SetThirdQuestionListeners() {
        this.btnA.addEventListener("click", this.EndGame);
        this.btnB.addEventListener("click", this.EndGame);
        this.btnC.addEventListener("click", this.EndGame);
        this.btnD.addEventListener("click", this.myListener);
    }
    RemoveThirdQuestionListeners() {
        this.btnA.removeEventListener("click", this.EndGame);
        this.btnB.removeEventListener("click", this.EndGame);
        this.btnC.removeEventListener("click", this.EndGame);
        this.btnD.removeEventListener("click", this.myListener);
    }
    SetFourthQuestionListeners() {
        this.btnA.addEventListener("click", this.myListener);
        this.btnB.addEventListener("click", this.EndGame);
        this.btnC.addEventListener("click", this.EndGame);
        this.btnD.addEventListener("click", this.EndGame);
    }
    RemoveFourthQuestionListeners() {
        this.btnA.removeEventListener("click", this.myListener);
        this.btnB.removeEventListener("click", this.EndGame);
        this.btnC.removeEventListener("click", this.EndGame);
        this.btnD.removeEventListener("click", this.EndGame);
    }
    SetFifthQuestionListeners() {
        this.btnA.addEventListener("click", this.EndGame);
        this.btnB.addEventListener("click", this.EndGame);
        this.btnC.addEventListener("click", this.myListener);
        this.btnD.addEventListener("click", this.EndGame);
    }
    RemoveFifthQuestionListeners() {
        this.btnA.removeEventListener("click", this.EndGame);
        this.btnB.removeEventListener("click", this.EndGame);
        this.btnC.removeEventListener("click", this.myListener);
        this.btnD.removeEventListener("click", this.EndGame);
    }
    SetRandomNumber() {
        return Math.round(Math.random() * 3);
    }

    constructor() {
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

        this.Init();
    }

    Init = () => {
        this.GetContent();
    }

    GetContent = async () => {
        let response = await fetch("/FirstQuestions/GetQuestions");
        this.data = await response.json();
        this.SetQuestionOnArrays(this.data);
        console.log(this.data);
    }

    SetQuestionOnArrays = (data) => {
        this.easyQuestions = [data[0], data[1], data[2]];
        this.mediumQuestions = [data[3], data[4], data[5]];
        this.advancedQuestions = [data[6], data[7], data[8]];
        this.hardQuestions = [data[9], data[10], data[11]];
        this.expertQuestions = [data[12], data[13], data[14]];

        switch (this.questionNumber) {
            case 1:
                this.SetFirstQuestion(this.easyQuestions);
                this.questionNumber++;
                break;
            case 2:
                this.SetSecondQuestion(this.mediumQuestions);
                this.questionNumber++;
                break;
            case 3:
                this.SetThirdQuestion(this.advancedQuestions);
                this.questionNumber++;
                break;
            case 4:
                this.SetFourthQuestion(this.hardQuestions);
                this.questionNumber++;
                break;
            case 5:
                this.SetFifthQuestion(this.expertQuestions);
                this.questionNumber++;
                break;
            case 6:
                this.AllCorrectAnswers();
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

        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetFirstQuestionListeners();
    }

    SetSecondQuestion = (lvlQuestions) => {

        this.balance += 500;
        this.RemoveFirstQuestionListeners();

        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetSecondQuestionListeners();
    }

    SetThirdQuestion = (lvlQuestions) => {

        this.balance += 1500;
        this.RemoveSecondQuestionListeners();

        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetThirdQuestionListeners();
    }
    SetFourthQuestion = (lvlQuestions) => {

        this.balance += 3000;
        this.RemoveThirdQuestionListeners();

        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetFourthQuestionListeners();
    }

    SetFifthQuestion(lvlQuestions) {

        this.balance += 5000;
        this.RemoveFourthQuestionListeners();

        this.randomNumber = this.SetRandomNumber();

        this.SetQuestionContent(lvlQuestions);

        this.SetFifthQuestionListeners();
    }
    AllCorrectAnswers() {

        this.RemoveFifthQuestionListeners();

        this.questionWindow.innerHTML = `
        Odpowiedziales poprawnie na wszystkie pytania!
        Twoj wynik to ${this.balance} zl!`;
    }

    EndGame = () => {
        this.questionWindow.innerHTML = `
        Dziekujemy za gre!
        Twoj wynik to ${this.balance} zl!`;
    }

    RandomNumber = () => {
        return Math.round(Math.random() * 3);
    }

}

const game = new Game();