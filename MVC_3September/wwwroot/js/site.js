let balance = 0;
let data;
let randomNumber;

function Init() {
    GetContent();
    CreateTableInsidePrizeTable();
}

function CreateTableInsidePrizeTable(){
    let prizeTable = document.getElementById("prizeTable");
    for (let i = 10; i >= 1; i--) {
        let table = document.createElement("div");
        table.classList.add("blueVioletRow");

        switch (i) {
            case 10:
                table.innerText = 1000000;
                table.id = "RowQuestion10";
                break;
            case 9:
                table.innerText = 100000;
                table.id = "RowQuestion9";
                break;
            case 8:
                table.innerText = 50000;
                table.id = "RowQuestion8";
                break;
            case 7:
                table.innerText = 25000;
                table.id = "RowQuestion7";
                break;
            case 6:
                table.innerText = 10000;
                table.id = "RowQuestion6";
                break;
            case 5:
                table.innerText = 5000;
                table.id = "RowQuestion5";
                break;
            case 4:
                table.innerText = 2000;
                table.id = "RowQuestion4";
                break;
            case 3:
                table.innerText = 1000;
                table.id = "RowQuestion3";
                break;
            case 2:
                table.innerText = 700;
                table.id = "RowQuestion2";
                break;
            case 1:
                table.innerText = 400;
                table.id = "RowQuestion1";
                break;
        }

        prizeTable.appendChild(table);
    }
}

async function GetContent() {
    let response = await fetch("/FirstQuestions/GetQuestions");
    data = await response.json();
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
    if (balance == 1000) {
        SetFourthQuestion(hardQuestions);
    }
    if (balance == 2000) {
        SetFifthQuestion(expertQuestions);
    }
}
function SetThirdQuestion() {
    console.log("Congrats" + balance)
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
    
    btnA.addEventListener("click", EndGame())
    btnB.addEventListener("click", () => {
        balance += 200;
        SetQuestionOnArrays(data);
    })
    btnC.addEventListener("click", EndGame())
    btnD.addEventListener("click", EndGame());
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
function EndGame() {
    console.log("Your balance is a :" + balance + "zl");
}
function RandomNumber() {
    return Math.round(Math.random() * 3);
}

Init();