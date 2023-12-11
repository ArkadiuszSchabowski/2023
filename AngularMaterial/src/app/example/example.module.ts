// example.module.ts

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ExampleComponent } from './example.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    // Dodaj inne moduły, których potrzebujesz
  ],
  declarations: [ExampleComponent],
})
export class ExampleModule { }