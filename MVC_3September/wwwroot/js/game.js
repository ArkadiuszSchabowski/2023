class Game {
    constructor() {
        this.balance = 0;
        this.data;
        this.randomNumber;
        this.questionWindow = document.querySelector("#questionWindow");
        this.btnA = document.querySelector("#btnA");
        this.btnB = document.querySelector("#btnB");
        this.btnC = document.querySelector("#btnC");
        this.btnD = document.querySelector("#btnD");

        this.Init();
    }

    Init = () => {
        this.GetContent();
    }

    GetContent = async () => {
        let response = await fetch("/FirstQuestions/GetQuestions");
        this.data = await response.json();
        this.SetQuestionOnArrays(this.data);
    }

    SetQuestionOnArrays = (data) => {
        let easyQuestions = [data[0], data[1], data[2]]
        let mediumQuestions = [data[3], data[4], data[5]]
        let advancedQuestions = [data[6], data[7], data[8]]
        let hardQuestions = [data[9], data[10], data[11]]
        let expertQuestions = [data[12], data[13], data[14]]

        if (this.balance == 0) {
            this.SetFirstQuestion(easyQuestions);
        }
        if (this.balance == 200) {
            this.SetSecondQuestion(mediumQuestions);
        }
        if (this.balance == 500) {
            this.SetThirdQuestion(advancedQuestions);
        }
        if (this.balance == 1000) {
            this.SetFourthQuestion(hardQuestions);
        }
        if (this.balance == 2000) {
            this.SetFifthQuestion(expertQuestions);
        }
    }

    SetThirdQuestion = () => {
        console.log("Congrats" + this.balance)
    }

    SetFirstQuestion = (easyQuestions) => {
        this.randomNumber = this.RandomNumber()

        this.questionWindow.innerHTML = easyQuestions[this.randomNumber].question;
        this.btnA.innerHTML = easyQuestions[this.randomNumber].answers[0];
        this.btnB.innerHTML = easyQuestions[this.randomNumber].answers[1];
        this.btnC.innerHTML = easyQuestions[this.randomNumber].answers[2];
        this.btnD.innerHTML = easyQuestions[this.randomNumber].answers[3];

        this.btnA.addEventListener("click", this.EndGame);
        this.btnB.addEventListener("click", () => {
            this.balance += 200;
            this.SetQuestionOnArrays(this.data);
        });
        this.btnC.addEventListener("click", this.EndGame);
        this.btnD.addEventListener("click", this.EndGame);
    }

    SetSecondQuestion = (mediumQuestions) => {
        this.btnA.removeEventListener("click", this.EndGame);
        this.btnB.removeEventListener("click", this.SetQuestionOnArrays);
        this.btnC.removeEventListener("click", this.EndGame);
        this.btnD.removeEventListener("click", this.EndGame);

        this.randomNumber = this.RandomNumber();

        this.questionWindow.innerHTML = mediumQuestions[this.randomNumber].question;
        this.btnA.innerHTML = mediumQuestions[this.randomNumber].answers[0];
        this.btnB.innerHTML = mediumQuestions[this.randomNumber].answers[1];
        this.btnC.innerHTML = mediumQuestions[this.randomNumber].answers[2];
        this.btnD.innerHTML = mediumQuestions[this.randomNumber].answers[3];

        this.btnA.addEventListener("click", () => {
            this.balance += 300;
            this.SetQuestionOnArrays(this.data);
        });
        this.btnB.addEventListener("click", () => {
            this.EndGame();
        });
        this.btnC.addEventListener("click", () => {
            this.EndGame();
        });
        this.btnD.addEventListener("click", () => {
            this.EndGame();
        });
    }

    EndGame = () => {
        console.log("Your balance is a :" + this.balance + "zl");
    }

    RandomNumber = () => {
        return Math.round(Math.random() * 3);
    }

}

const game = new Game();