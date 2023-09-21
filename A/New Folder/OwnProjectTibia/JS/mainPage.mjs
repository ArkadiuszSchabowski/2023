"use strict";
const btnRegister = document.getElementById("btnRegister");

let mainContent = document.getElementById("mainContent")
let highscores = document.querySelector(".highscores");

highscores.addEventListener("click", async function(){
  console.log("btn clicked");
  let path = "highscores.html";
  let response = await fetch(path);
  let data = await response.text();
  mainContent.innerHTML = data;
});


btnRegister.addEventListener("click", async function(){
  let path = "register.html";
  let response = await fetch(path);
  let data = await response.text();
  mainContent.innerHTML = data;
  });


login.addEventListener("click", () => ClearLogin());
password.addEventListener("click", () => ClearPassword());

const ClearLogin = () => {
  login.value = "";
};

const ClearPassword = () => {
  password.value = "";
};


const CreateDataOnJson = async () => {
  let urlApi = "https://random.dog/woof.json";
  let response = await fetch(urlApi);
  let data = await response.json();

  // Sprawdź, czy URL kończy się na .mp4 i jeśli tak, pobierz kolejne dane
  if (data.url.endsWith(".mp4") || data.url.endsWith(".webm")) {
    CreateDataOnJson();
    return;
  }

  GetUrlOnWebsite(data.url);
};

let GetUrlOnWebsite = (data) => {
  // Usuń poprzedni obrazek, jeśli istnieje
  if (currentImage) {
    galleryDiv.removeChild(currentImage);
  }

  let simpleImg = document.createElement("img");
  simpleImg.src = data;
  simpleImg.classList.add("imgGallery");
  galleryDiv.appendChild(simpleImg);

  currentImage = simpleImg; // Ustaw obecny obrazek na nowo dodany
};

CreateDataOnJson();

galleryDiv.addEventListener("click", CreateDataOnJson);