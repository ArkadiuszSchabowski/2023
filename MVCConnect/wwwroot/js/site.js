

// Pobieramy dane JSON z kontrolera
async function fetchData() {
let questions; // Tablica z danymi wszystkich pytań
    let path = '/Home/GetData';
    try {
        let response = await fetch(path);
        if (response.ok) {
            let data = await response.json();
            questions = data;
            console.log(questions);

            SetQuestion(resultIndex);
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        console.error(error);
    }
}

fetchData();

function SetQuestion(index) {
    let resultDiv = document.getElementById("resultDiv");
    let btnA = document.getElementById("btnA");
    let btnB = document.getElementById("btnB");

    resultDiv.innerHTML = questions[index].Text;
    btnA.innerHTML = questions[index].Answers[0];
    btnB.innerHTML = questions[index].Answers[1];

    // Dodaj obsługę kliknięcia przycisków
    btnA.addEventListener("click", function () {
        CheckAnswer(0, index);
    });

    btnB.addEventListener("click", function () {
        CheckAnswer(1, index);
    });
}

function CheckAnswer(selectedIndex, questionIndex) {
    let resultIndex = 0; // Indeks pytania w liście pytań
    if (selectedIndex === questions[questionIndex].CorrectAnswerIndex) {
        alert("Poprawna odpowiedź!");
        resultIndex++; // Przejdź do następnego pytania
        SetQuestion(resultIndex);
    } else {
        alert("Błędna odpowiedź!");
    }
}