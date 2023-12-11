// app-routing.module.ts

import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
  { path: 'second', component: SecondComponent },
  { path: '', redirectTo: '/first', pathMatch: 'full' },
];
