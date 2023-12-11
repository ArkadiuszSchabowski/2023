import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
    { path: '', component: FirstComponent, pathMatch: 'full' },
    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent },
];
