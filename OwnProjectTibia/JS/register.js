let mainContent = document.getElementById("mainContent");
let btnNewAcc = document.getElementById("btnNewAcc");
const accInput = document.getElementById("accInput");
const passwordInput = document.getElementById("passwordInput");
const emailInput = document.getElementById("emailInput");

btnNewAcc.addEventListener("click", function () {
    let acc = accInput.value;
    let password = passwordInput.value;
    let email = emailInput.value;

    if(!acc || !password ||!email){
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
    if(password.length <= 4){
        alert("Twoje haslo powinno zawierac conajmniej 5 znakow")
    }
    if(!email.includes("@") || email[0] === "@" || email.length <= 7){
        alert("Nieprawidlowy adres email");
        return;
    }
    console.log(acc, password, email);
});
