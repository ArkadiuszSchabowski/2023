import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { FirstPageComponent } from './app/first-page/first-page.component';

bootstrapApplication(FirstPageComponent, appConfig)
  .catch((err) => console.error(err));
