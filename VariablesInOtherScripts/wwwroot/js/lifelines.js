class Lifelines {
  constructor(game) {
    this.game = game;
  }

  FiftyFifty() {
    console.log(this.game.correctAnswerIndex);
    // Teraz możesz korzystać z this.game.correctAnswerIndex
  }
}
