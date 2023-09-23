class Apples {
  constructor() {
    this.apple0 = document.querySelector("#apple0");
    this.apple1 = document.querySelector("#apple1");
    this.apple2 = document.querySelector("#apple2");
    this.energy = 5;
    this.lblMiss = document.getElementById("lblMiss");
  }
  FallApple(apple) {
    let currentTop = parseFloat(apple.style.top) || 0;

    currentTop += 10;
    apple.style.top = currentTop + "px";

    if (currentTop === 430) {
      apple.style.top = "0px";
      apples.SetAppleOnWidth(apple);
      this.energy--;
      this.lblMiss.innerHTML = "Energia jeza: " + this.energy;
      if (this.energy === 0) {
        // alert("Koniec gry");
      }
    }
  }
  SetAppleOnWidth(apple) {
    // Width Game - 660
    // Width Apple = 70
    // Width Game - Apple = 590
    let random = Math.round(Math.random() * 590);
    apple.style.left = random + "px";
    console.log(apple.style.left);
  }
}
let apples = new Apples();

apples.SetAppleOnWidth(apples.apple0);
apples.SetAppleOnWidth(apples.apple1);
apples.SetAppleOnWidth(apples.apple2);
setInterval(() => apples.FallApple(apples.apple0), 300);
setInterval(() => apples.FallApple(apples.apple1), 200);
setInterval(() => apples.FallApple(apples.apple2), 500);

class Buttons {
  constructor() {
    this.btnNewGame = document.querySelector("#btnNewGame");
    this.btnInstructions = document.querySelector("#btnInstructions");
    this.btnScores = document.querySelector("#btnScores");
    this.btnExit = document.querySelector("#btnExit");

    this.instructionsDisplay = false; // Dodajemy pole do śledzenia stanu instrukcji
    this.instructionsDiv = null; // Zmienna do przechowywania elementu instrukcji

    this.btnExit.addEventListener("click", () => this.Exit());
    this.btnInstructions.addEventListener("click", () => this.Instructions());
  }

  Exit() {
    window.close();
  }

  Instructions() {
    if (!this.instructionsDisplay) {
      this.instructionsDiv = document.createElement("div");
      this.instructionsDiv.id = "instructionsDiv";
      this.instructionsDiv.style.border = "2px solid red";
      this.instructionsDiv.style.width = "700px";
      this.instructionsDiv.style.height = "480px";
      this.instructionsDiv.style.backgroundColor = "black";
      this.instructionsDiv.style.color = "red";
      this.instructionsDiv.style.zIndex = "2";
      this.instructionsDiv.style.position = "absolute";
      this.instructionsDiv.style.top = "50%";
      this.instructionsDiv.style.left = "38%";
      this.instructionsDiv.style.transform = "translate(-50%, -50%)";
      this.instructionsDiv.style.padding = "10px";
      this.instructionsDiv.style.borderRadius = "30px";
      this.instructionsDiv.innerHTML = `
        <h1>Witaj w grze "Jeżyk i Jabłka"!</h1>
        <br>
        <p>Jeżyk jest w trakcie zbiorów. Tym razem zbiera jabłka.</p>
        <p>Pomóż jeżykowi zebrać ich jak najwięcej. Jeżyk potrzebuje także energii na zbiory.</p>
        <p>Każde upuszczone jabłko to mniej energii.</p>
        <p>Jeśli energia jeża spadnie do zera, jeżyk zapada w sen zimowy.</p>
        <br>
        <h2>Sterowanie:</h2>
        <br>
        <p><strong>Strzałki w lewo i prawo:</strong> poruszanie jeżem na boki.</p>
        <p><strong>Strzałka w górę:</strong> Jeżyk obraca przodem sie pyszczkiem w nasyzm kierunku.</p>
        <p><strong>Spacja:</strong> Skok jezka.</p>
      `;
      document.body.appendChild(this.instructionsDiv);
      this.instructionsDisplay = true; // Zmieniamy stan na wyświetlane
    } else {
      document.body.removeChild(this.instructionsDiv);
      this.instructionsDisplay = false; // Zmieniamy stan na ukryte
    }
  }
}

let buttons = new Buttons();


class HedgeHog {
  constructor() {
    this.hedgehog = document.querySelector("#hedgehog");
    this.isFacingRight = true;
    this.isStanding = false;
    this.isJumping = false;

    window.addEventListener("keydown", (e) => {
      if (e.key === " ") this.HedgehogJump();
      if (e.key === "ArrowUp") this.HedgehogStandOnTwoPaws();
      if (e.key === "ArrowLeft") this.GoToLeft();
      if (e.key === "ArrowRight") this.GoToRight();
    });

    window.addEventListener("keyup", (e) => {
      if (e.key === "ArrowUp" && this.isStanding === true)
        this.HedgehogEndStandOnTwoPaws();
      if (e.key === " ") this.HedgehogJumpEnd();
    });
  }

  GoToRight() {
    let currentPosition = parseFloat(this.hedgehog.style.left) || 0;
    currentPosition += 10;
    this.hedgehog.style.left = currentPosition + "px";
    if (!this.isFacingRight) this.TurnHedgeHogToTheRight();
  }

  GoToLeft() {
    let currentPosition = parseFloat(getComputedStyle(this.hedgehog).left) || 0;
    currentPosition -= 10;
    this.hedgehog.style.left = currentPosition + "px";
    if (this.isFacingRight) this.TurnHedgeHogToTheLeft();
  }

  TurnHedgeHogToTheLeft() {
    this.hedgehog.src = "hedgehog.jpg";
    this.hedgehog.classList.add("hedgehogFlip");
    this.isFacingRight = false;
  }

  TurnHedgeHogToTheRight() {
    this.hedgehog.src = "hedgehog.jpg";
    this.hedgehog.classList.remove("hedgehogFlip");
    this.isFacingRight = true;
  }

  HedgehogStandOnTwoPaws() {
    this.hedgehog.src = "hedgehogStand.jpg";
  }

  HedgehogEndStandOnTwoPaws() {
    this.hedgehog.classList.remove("hedgehogStand");
    this.isStanding = false;
  }

  HedgehogJump() {
    this.hedgehog.src = "hedgehogStand.jpg";
    this.hedgehog.classList.add("hedgehogJump");
    this.isJumping = true;
  }

  HedgehogJumpEnd() {
    this.hedgehog.classList.remove("hedgehogJump");
    this.isJumping = false;
  }
}

let hedge = new HedgeHog();
