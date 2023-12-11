import { Routes } from '@angular/router';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "registration", component: RegistrationComponent},
    {path: "resetPassword", component: ResetPasswordComponent}
];