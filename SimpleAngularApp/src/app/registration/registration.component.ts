import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  styleUrls: ['./registration.component.css'],
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  loginString: string = ''; // Dodaj inicjalizację

  @ViewChild('lblLogin') loginElement!: ElementRef;
  @ViewChild('lblRegistration') registration!: ElementRef;
  @ViewChild('inputLogin') inputLogin!: ElementRef;
  @ViewChild('inputPassword') inputPassword!: ElementRef;
  @ViewChild('inputRepeatPassword') inputRepeatPassword!: ElementRef;
  @ViewChild('btnOk') btnOk!: ElementRef; // Dodaj deklarację właściwości btnOk

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.registrationUser();
    this.goToLoginPage();
  }

  goToLoginPage() {
    console.log('Navigating to registration page');
    this.router.navigate(['']);
  }

  registrationUser() {
    this.btnOk.nativeElement.addEventListener('click', () => {
      const inputLoginValue = this.inputLogin.nativeElement.value;
      const inputPasswordValue = this.inputPassword.nativeElement.value;

      if (!this.validateEmail(inputLoginValue) && !this.validatePassword(inputPasswordValue)) {
        console.log("Nieprawidłowy adres e-mail");
        console.log("Nieprawidłowe hasło");
      } else if (!this.validateEmail(inputLoginValue)) {
        console.log("Nieprawidłowy adres e-mail");
      } else if (!this.validatePassword(inputPasswordValue)) {
        console.log("Nieprawidłowe hasło");
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  validatePassword(inputPasswordValue: string): boolean {
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