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
