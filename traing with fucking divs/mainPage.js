let highscores = document.getElementById("highscoresDiv");
let characters = document.getElementById("charactersDiv");
let guilds = document.getElementById("guildsDiv");
let mainContent = document.getElementById("mainContentDiv");
let massiveTeamBattle = document.getElementById("massiveTeamBattleDiv");
let monsters = document.getElementById("monstersDiv");
let auctions = document.getElementById("auctionsDiv");

let left = document.getElementById("left");
let center = document.getElementById("center");
let right = document.getElementById("right");

function SetStyleForWindows() {
  //Left Side
  for (const el of left.children) {
    el.classList.add("normalWindow");
  }
  //Center
  center.children[0].classList.add("biggerWindow");

  //Right Side
  for (let el of right.children) {
    el.classList.add("normalWindow");
  }
}
SetStyleForWindows();

highscores.addEventListener("click", function ShowClick(){
  console.log("highscores clicked!");
})