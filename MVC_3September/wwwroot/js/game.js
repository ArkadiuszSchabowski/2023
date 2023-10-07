
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

        this.easyQuestions = [this.data[0], this.data[1], this.data[2]];
        this.mediumQuestions = [this.data[3], this.data[4], this.data[5]];
        this.advancedQuestions = [this.data[6], this.data[7], this.data[8]];
        this.hardQuestions = [this.data[9], this.data[10], this.data[11]];
        this.expertQuestions = [this.data[12], this.data[13], this.data[14]];

        switch (this.questionNumber) {
            case 1:
                this.SetFirstQuestion(this.easyQuestions);
                this.questionNumber++;
                break;
            case 2:
                this.SetSecondQuestion(this.mediumQuestions);
                this.prizeTable.childNodes[9].style.backgroundColor = "green";

                this.questionNumber++;
                break;
            case 3:
                this.SetThirdQuestion(this.advancedQuestions);
                this.questionNumber++;
                this.prizeTable.childNodes[8].style.backgroundColor = "green";
                break;
            case 4:
                this.SetFourthQuestion(this.hardQuestions);
                this.questionNumber++;
                this.prizeTable.childNodes[7].style.backgroundColor = "green";
                break;
            case 5:
                this.SetFifthQuestion(this.expertQuestions);
                this.prizeTable.childNodes[6].style.backgroundColor = "green";
                this.questionNumber++;
                break;
            case 6:
                this.AllCorrectAnswers();
                this.prizeTable.childNodes[5].style.backgroundColor = "green";
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

        this.SetDefaultTextForButtons();
    }

    EndGame = () => {
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
        return Math.floor(Math.random() * 3);
    }
    SetDefaultTextForButtons() {
        this.btnA.innerHTML = "A";
        this.btnB.innerHTML = "B";
        this.btnC.innerHTML = "C";
        this.btnD.innerHTML = "D";
    }
}

const game = new Game(prizeTableDiv);