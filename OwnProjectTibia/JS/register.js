"use strict";
let mainContent = document.getElementById("mainContent");
let btnNewAcc = document.getElementById("btnNewAcc");
const accInput = document.getElementById("accInput");
const passwordInput = document.getElementById("passwordInput");
const emailInput = document.getElementById("emailInput");

btnNewAcc.addEventListener("click", () => {
    let acc = accInput.value;
    let pass = passwordInput.value;
    let email = emailInput.value;

    if(!acc || !pass ||!email){
        alert("Wszystkie pola sa obowiazkowe!");
        return;
    }
    if(acc.length <= 6 ){
        alert("Za krotki acc. Acc powinien miec conajmniej 7 cyfr!");
        return;
    }
    if(isNaN(acc)){
        alert("Acc powinno zawierac tylko liczby!")
        return;
    }
    if(pass.length <= 4){
        alert("Twoje haslo powinno zawierac conajmniej 5 znakow")
    }
    if(!email.includes("@") || email[0] === "@" || email.length <= 7){
        alert("Nieprawidlowy adres email");
        return;
    }
    console.log(acc, pass, email);
    saveDataToLocalStorage(acc, pass, email);
});
function saveDataToLocalStorage(acc, pass, email) {
    const userData = {
        account: acc,
        password: pass,
        emailAdress: email
    };

    const emailKey = `userData_${email}`; // Tworzenie unikalnego klucza na podstawie adresu email
    const jsonData = JSON.stringify(userData);
    localStorage.setItem(emailKey, jsonData);
}
// Funkcja do wczytywania danych z localStorage
function loadDataFromLocalStorage() {
    const jsonData = localStorage.getItem('userData');
    if (jsonData) {
        const userData = JSON.parse(jsonData);
        return userData;
    }
    return null;
}
window.addEventListener("load", () => {
    const userData = loadDataFromLocalStorage();
});