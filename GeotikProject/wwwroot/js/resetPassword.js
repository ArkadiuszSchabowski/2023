class ResetPassword {
    constructor() {
        this.InputText = document.getElementById("inputText");
        this.BtnOk = document.getElementById("btnOk");
        this.information = document.getElementById("informationDiv");

        this.ResetPasswordUser();
    }

    ResetPasswordUser() {
        this.BtnOk.addEventListener("click", () => {
            const inputTextValue = this.InputText.value;

            if (this.ValidateEmail(inputTextValue))
            {
                this.information.innerText = "Twoje hasło zostało zrestartowane";
                this.ClearInput();
            } 
            else
            {
                this.information.innerText = "Niepoprawny adres e-mail";
                this.ClearInput();
            }
        });
    }
    ClearInput(){
        this.InputText.value = "";
    }

    ValidateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
}

const resetPassword = new ResetPassword();
