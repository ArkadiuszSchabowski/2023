let balance = 0;
let data;
let randomNumber;

function Init() {
    GetContent();
}

async function GetContent() {
    let response = await fetch("/FirstQuestions/GetQuestions");
    data = await response.json();
    console.log(data);
    SetQuestionOnArrays(data);
}

function SetQuestionOnArrays(data) {
    let easyQuestions = [data[0], data[1], data[2]]
    let mediumQuestions = [data[3], data[4], data[5]]
    let advancedQuestions = [data[6], data[7], data[8]]
    let hardQuestions = [data[9], data[10], data[11]]
    let expertQuestions = [data[12], data[13], data[14]]

    if (balance == 0) {
        SetFirstQuestion(easyQuestions);
    }
    if (balance == 200) {
        SetSecondQuestion(mediumQuestions);
    }
    if (balance == 500) {
        SetThirdQuestion(advancedQuestions);
    }
}
function SetThirdQuestion() {
    console.log("Congrats" + balance)
}

function SetSecondQuestion(mediumQuestions) {
    btnA.removeEventListener("click", EndGame);
    btnB.removeEventListener("click", SetQuestionOnArrays);
    btnC.removeEventListener("click", EndGame);
    btnD.removeEventListener("click", EndGame);

    questionWindow.innerHTML = mediumQuestions[randomNumber].question;
    btnA.innerHTML = mediumQuestions[randomNumber].answers[0];
    btnB.innerHTML = mediumQuestions[randomNumber].answers[1];
    btnC.innerHTML = mediumQuestions[randomNumber].answers[2];
    btnD.innerHTML = mediumQuestions[randomNumber].answers[3];

    btnA.addEventListener("click", () => {
        balance += 300;
        SetQuestionOnArrays(data);
    })
    btnB.addEventListener("click", () => {
        EndGame();
    })
    btnC.addEventListener("click", () => {
        EndGame();
    })
    btnD.addEventListener("click", () => {
        EndGame();
    })
}

function SetFirstQuestion(easyQuestions) {


    let questionWindow = document.querySelector("#questionWindow");
    let btnA = document.querySelector("#btnA");
    let btnB = document.querySelector("#btnB");
    let btnC = document.querySelector("#btnC");
    let btnD = document.querySelector("#btnD");

    randomNumber = RandomNumber()

    questionWindow.innerHTML = easyQuestions[randomNumber].question;
    btnA.innerHTML = easyQuestions[randomNumber].answers[0];
    btnB.innerHTML = easyQuestions[randomNumber].answers[1];
    btnC.innerHTML = easyQuestions[randomNumber].answers[2];
    btnD.innerHTML = easyQuestions[randomNumber].answers[3];

    btnA.addEventListener("click", () => {
        EndGame();
    })
    btnB.addEventListener("click", () => {
        balance += 200;
        SetQuestionOnArrays(data);
    })
    btnC.addEventListener("click", () => {
        EndGame();
    })
    btnD.addEventListener("click", () => {
        EndGame();
    })
}
function EndGame() {
    console.log("Your balance is a :" + balance + "zl");
}
function RandomNumber() {
    return Math.round(Math.random() * 3);
}

Init();