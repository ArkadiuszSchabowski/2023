import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  standalone: true
})
export class LoginComponent {
  title = 'SimpleAngularApp';

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