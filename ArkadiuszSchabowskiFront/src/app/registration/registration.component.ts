import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  inputLoginValue: string = '';
  inputPasswordValue: string = '';
  inputRepeatPasswordValue: string = '';

  constructor(private router: Router) {}

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  registrationUser() {
    const inputLoginValue = this.inputLoginValue;
    const inputPasswordValue = this.inputPasswordValue;

    if (!this.validateEmail(inputLoginValue) && !this.validatePassword(inputPasswordValue)) {
      console.log("Nieprawidłowy adres e-mail");
      console.log("Nieprawidłowe hasło");
    } else if (!this.validateEmail(inputLoginValue)) {
      console.log("Nieprawidłowy adres e-mail");
      return;
    } else if (!this.validatePassword(inputPasswordValue)) {
      console.log("Nieprawidłowe hasło");
      return;
    } else {
      this.router.navigate(['/login']);
    }
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  validatePassword(password: string): boolean {
    const digitRegex = /\d/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;

    return (
      password.length >= 8 &&
      digitRegex.test(password) &&
      lowercaseRegex.test(password) &&
      uppercaseRegex.test(password)
    );
  }
}