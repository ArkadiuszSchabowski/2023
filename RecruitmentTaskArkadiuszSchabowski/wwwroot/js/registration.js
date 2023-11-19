class Registration {
  constructor() {
    this.Login = document.getElementById("lblLogin");
    this.Registration = document.getElementById("lblRegistration");
    this.InputLogin = document.getElementById("inputLogin");
    this.InputPassword = document.getElementById("inputPassword");
    this.InputRepeatPassword = document.getElementById("inputRepeatPassword");
    this.BtnOk = document.getElementById("btnOk");

    this.RegistrationUser();
    this.GoToLoginPage();
  }

  GoToLoginPage() {
    this.Login.addEventListener("click", () => {
      window.location.href = "../Login/login.html";
    });
  }

  RegistrationUser() {
    this.BtnOk.addEventListener("click", () => {
      const inputLoginValue = this.InputLogin.value;
      const inputPasswordValue = this.InputPassword.value;
      if (
        !this.ValidateEmail(inputLoginValue) &&
        !this.ValidatePassword(inputPasswordValue)
      ) {
        console.log("Nieprawidłowy adres e-mail");
        console.log("Nieprawidłowe hasło");
      } else if (!this.ValidateEmail(inputLoginValue)) {
        console.log("Nieprawidłowy adres e-mail");
        return;
      } else if (!this.ValidatePassword(inputPasswordValue)) {
        console.log("Nieprawidłowe hasło");
        return;
      } else window.location.href = "../Login/login.html";
    });
  }

  ValidateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  ValidatePassword(inputPasswordValue) {
    const digitRegex = /\d/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;

    return (
      inputPasswordValue.length >= 8 &&
      digitRegex.test(inputPasswordValue) &&
      lowercaseRegex.test(inputPasswordValue) &&
      uppercaseRegex.test(inputPasswordValue)
    );
  }
}

const registration = new Registration();
