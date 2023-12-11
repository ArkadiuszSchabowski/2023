import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {
  constructor(private router: Router){}
  GoToFirst(){
    this.router.navigate(['first']);
  }
}
