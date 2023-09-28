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
    const fallSpeed = 2; //

    currentTop += fallSpeed;
    apple.style.top = currentTop + "vh";

    if (currentTop === 65) {
      apple.style.top = "0vh"; //
      apples.SetAppleOnWidth(apple);
      this.energy--;
      this.lblMiss.innerHTML = "Energia jeza: " + this.energy;
      if (this.energy === 0) {
        // alert("Koniec gry");
      }
    }
  }

  SetAppleOnWidth(apple) {
    let random = Math.round(Math.random() * 73);
    apple.style.left = random + "%";
    console.log(apple.style.left);
  }
}
let apples = new Apples();

apples.SetAppleOnWidth(apples.apple0);
apples.SetAppleOnWidth(apples.apple1);
apples.SetAppleOnWidth(apples.apple2);
// setInterval(() => apples.FallApple(apples.apple0), 200);
// setInterval(() => apples.FallApple(apples.apple1), 300);
// setInterval(() => apples.FallApple(apples.apple2), 100);

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
      this.instructionsDisplay = true;
    } else {
      document.body.removeChild(this.instructionsDiv);
      this.instructionsDisplay = false;
    }
  }
}

let buttons = new Buttons();

class Animal {
  constructor(character) {
    this.animal = document.querySelector("#animal");
    this.isFacingRight = false;
    this.isStanding = true;
    this.isJumping = false;
    this.character = character;

    //KLAWISZ WCISNIETY
    window.addEventListener("keydown", (e) => {
      if (e.key === " ") this.AnimalJump();
      if (e.key === "ArrowUp") this.AnimalStandOnTwoPaws();
      if (e.key === "ArrowLeft") this.GoToLeft();
      if (e.key === "ArrowRight") this.GoToRight();
    });

    //KLAWICSZ PUSZCZONY
    window.addEventListener("keyup", (e) => {
      if (e.key === "ArrowUp") this.AnimalEndStandOnTwoPaws();
      if (e.key === " ") this.AnimalJumpEnd();
    });
  }

  GoToRight() {
    const computedLeft = window.getComputedStyle(this.animal).getPropertyValue("left");
    this.currentPosition = parseFloat(computedLeft);
    const gameWidth = document.querySelector("#game").offsetWidth; // Szerokość obszaru gry
  
    if (this.currentPosition < gameWidth - this.animal.offsetWidth - 20) {
      const foxSpeed = 20;
      this.currentPosition += foxSpeed;
      this.animal.style.left = this.currentPosition + "px";
      if (this.isFacingRight === false) {
        this.TurnAnimalToTheRight();
        this.isFacingRight = true;
      }
    }
  }

  //Lepiej napisana
  GoToLeft() {
    const computedLeft = window
      .getComputedStyle(this.animal)
      .getPropertyValue("left");
    this.currentPosition = parseFloat(computedLeft);
    if (this.currentPosition > 10) {
      this.currentPosition -= 20;
      this.animal.style.left = this.currentPosition + "px";
      if (this.isStanding === true || this.isFacingRight === true) {
        this.TurnAnimalToTheLeft();
        this.isFacingRight = false;
        this.isStanding = false;
      }
    }
  }

  TurnAnimalToTheLeft() {
    if (this.character === "Hedgehog") {
      this.animal.src = "../IMG/hedgehog.jpg";
    }
    if (this.character === "Fox") {
      this.animal.src = "../IMG/fox.jpg";
    }
    this.animal.classList.add("animalFlip");
    this.isFacingRight = false;
    this.isStanding = false;
  }

  TurnAnimalToTheRight() {
    if (this.character === "Hedgehog") {
      this.animal.src = "../IMG/hedgehog.jpg";
    }
    if (this.character === "Fox") {
      this.animal.src = "../IMG/fox.jpg";
    }
    this.animal.classList.remove("animalFlip");
    this.isFacingRight = true;
  }

  AnimalStandOnTwoPaws() {
    if (this.character === "Hedgehog") {
      this.animal.src = "../IMG/hedgehogStand.jpg";
    }
    if (this.character === "Fox") {
      this.animal.src = "../IMG/foxStand.jpg";
    }
  }

  AnimalEndStandOnTwoPaws() {
    if (this.character === "Hedgehog") {
      this.animal.classList.remove("hedgehogStand");
    }
    if (this.character === "Fox") {
      this.animal.classList.remove("foxStand");
    }
    this.isStanding = false;
  }

  AnimalJump() {
    if (this.character === "Hedgehog") {
      this.animal.src = "../IMG/hedgehogStand.jpg";
    }
    if (this.character === "Fox") {
      this.animal.src = "../IMG/foxStand.jpg";
    }
    this.animal.classList.add("animalJump");
    this.isJumping = true;
  }

  AnimalJumpEnd() {
    this.animal.classList.remove("animalJump");
    this.isJumping = false;
  }
  SetAnimal() {
    if (this.character === "Hedgehog") {
      this.animal.src = "../IMG/hedgehogStand.jpg";
    }
    if (this.character === "Fox") {
      this.animal.src = "../IMG/foxStand.jpg";
    }
  }
}
const character = localStorage.getItem("character") || "Hedgehog";

const animal = new Animal(character);

animal.SetAnimal();

class AnimalUnitTests{
  
}
