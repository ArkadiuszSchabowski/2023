class Game {
    constructor() {
        this.correctAnswerIndex = null; // Inicjalizuj jako null
        this.lifelines = new Lifelines(this);
    }

    Init() {
        // Oczekuj na załadowanie struktury gry, np. po zdarzeniu "DOMContentLoaded".
        document.addEventListener("DOMContentLoaded", () => {
            this.GetContent();
        });
    }

    GetContent() {
        this.correctAnswerIndex = 2; // Pobierz poprawną odpowiedź z odpowiedniego źródła
        this.lifelines.FiftyFifty(); // Teraz, kiedy masz correctAnswerIndex, możesz przekazać go do metody
    }
}

const game = new Game();
game.Init();