import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  goToRegistrationPage() {
    console.log('Navigating to registration page');
    this.router.navigate(['registration']);
  }

  goToResetPasswordPage() {
    console.log('Navigating to resetPassword page');
    this.router.navigate(['resetPassword']);
  }
}