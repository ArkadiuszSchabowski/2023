import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  goToRegistrationPage() {
    this.router.navigate(['/registration']);
  }

  goToResetPasswordPage() {
    this.router.navigate(['/reset-password']);
  }
}