let btnRegister = document.getElementById("btnRegister");
let mainContent = document.getElementById("mainContent");

btnRegister.addEventListener("click", async function(){
let path = "register.html";
let response = await fetch(path);
let data = await response.text();
mainContent.innerHTML = data;
});
