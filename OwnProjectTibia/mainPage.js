let login = document.getElementById("login");
let password = document.getElementById("password");

login.addEventListener("click", ClearLogin);
password.addEventListener("click", ClearPassword);

function ClearLogin() {
  login.value = "";
}
function ClearPassword() {
  password.value = "";
}


let galleryDiv = document.getElementById("gallery");
let currentImage = null; // Zmienna przechowująca referencję do obecnie wyświetlanego obrazka

async function CreateDataOnJson() {
  let urlApi = "https://random.dog/woof.json";
  let response = await fetch(urlApi);
  let data = await response.json();

  // Sprawdź, czy URL kończy się na .mp4 i jeśli tak, pobierz kolejne dane
  if (data.url.endsWith(".mp4") || data.url.endsWith(".webm")) {
    CreateDataOnJson();
    return;
  }

  GetUrlOnWebsite(data.url);
}

function GetUrlOnWebsite(data) {
  // Usuń poprzedni obrazek, jeśli istnieje
  if (currentImage) {
    galleryDiv.removeChild(currentImage);
  }

  let simpleImg = document.createElement("img");
  simpleImg.src = data;
  console.log(data);
  simpleImg.classList.add("imgGallery");
  galleryDiv.appendChild(simpleImg);

  currentImage = simpleImg; // Ustaw obecny obrazek na nowo dodany
}

CreateDataOnJson();

galleryDiv.addEventListener("click", CreateDataOnJson);

