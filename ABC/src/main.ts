import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { FirstComponent } from './app/first/first.component';

bootstrapApplication(FirstComponent, appConfig)
  .catch((err) => console.error(err));
