class Login {
  constructor() {
    this.Login = document.getElementById("lblLogin");
    this.Registration = document.getElementById("lblRegistration");
    this.InputLogin = document.getElementById("inputLogin");
    this.InputPassword = document.getElementById("inputPassword");
    this.BtnResetPassword = document.getElementById("btnResetPassword");
    this.BtnOk = document.getElementById("btnOk");

    this.GoToRegistrationPage();
    this.GoToResetPasswordPage();
  }
  GoToRegistrationPage() {
    this.Registration.addEventListener("click", () => {
        window.location.href = "/html/registration.html";
    });
  }
  GoToResetPasswordPage(){
    this.BtnResetPassword.addEventListener("click", ()=>{
        window.location.href = "/html/resetPassword.html";
    })
  }
}
const login = new Login();