// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';  // Sprawdź, czy ścieżka do komponentu jest poprawna.

@NgModule({
  declarations: [
    AppComponent,  // Dodaj tutaj inne komponenty, jeżeli są używane w twojej aplikacji.
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }