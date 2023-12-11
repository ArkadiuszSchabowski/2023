import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  styleUrls: ['./reset-password.component.css'],
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent {
  @ViewChild('inputText') inputText!: ElementRef;
  @ViewChild('btnOk') btnOk!: ElementRef;
  @ViewChild('informationDiv') informationDiv!: ElementRef;

  constructor() {
    // Pozostawiam konstruktor pusty, ponieważ ViewChild zostanie zainicjowane w metodzie ngAfterViewInit
  }

  ngAfterViewInit() {
    this.resetPasswordUser();
  }

  resetPasswordUser() {
    this.btnOk.nativeElement.addEventListener('click', () => {
      const inputTextValue = this.inputText.nativeElement.value;

      if (this.validateEmail(inputTextValue)) {
        this.informationDiv.nativeElement.innerText = 'Twoje hasło zostało zrestartowane';
        this.clearInput();
      } else {
        this.informationDiv.nativeElement.innerText = 'Niepoprawny adres e-mail';
        this.clearInput();
      }
    });
  }

  clearInput() {
    this.inputText.nativeElement.value = '';
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}