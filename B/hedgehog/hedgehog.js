let apple0 = document.querySelector("#apple0");
let apple1 = document.querySelector("#apple1");
let apple2 = document.querySelector("#apple2");
let hedgehog = document.querySelector("#hedgehog");
let hedgehogIsRight = true;
let hedgehogStand = false;
let hedgehogJump = false;
let energy = 5;
let lblMiss = document.getElementById("lblMiss");

// setInterval(() => FallApple(apple0), 300);
// setInterval(() => FallApple(apple1), 200);
// setInterval(() => FallApple(apple2), 500);

window.addEventListener("keydown", (e) => {
  let currentPosition;
  if (e.key === "ArrowLeft") {
    currentPosition = parseFloat(getComputedStyle(hedgehog).left) || 0;
    currentPosition -= 10;
    hedgehog.style.left = currentPosition + "px";
    if (hedgehogIsRight) {
      hedgehog.classList.add("hedgehogFlip");
      hedgehogIsRight = false;
    }
  }
  if (e.key === "ArrowRight") {
    currentPosition = parseFloat(hedgehog.style.left) || 0;
    currentPosition += 10;
    hedgehog.style.left = currentPosition + "px";
    if (!hedgehogIsRight) {
      hedgehog.classList.remove("hedgehogFlip");
      hedgehogIsRight = true;
    }
  }
  if (e.key === "ArrowUp") {
    hedgehog.classList.add("hedgehogStand");
    hedgehogStand = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp" && hedgehogStand === true) {
    hedgehog.classList.remove("hedgehogStand");
    hedgehogStand = false;
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    hedgehog.classList.add("hedgehogJump");
    hedgehogJump = true;
  }
});
window.addEventListener("keyup", (e) => {
  if (e.key === " " && hedgehogJump === true) {
    hedgehog.classList.remove("hedgehogJump");
    hedgehogJump = false;
  }
});

function FallApple(apple) {
  let currentTop = parseFloat(apple.style.top) || 0;

  currentTop += 10;
  apple.style.top = currentTop + "px";

  console.log("apple 0:" + apple0.style.top);
  console.log("apple 1:" + apple1.style.top);
  console.log("apple 2:" + apple2.style.top);

  if (currentTop === 430) {
    apple.style.top = "0px";
    energy--;
    lblMiss.innerHTML = "Energia jeza: " + energy;
    if(energy === 0){
        // alert("Koniec gry");
    }
  }
}
