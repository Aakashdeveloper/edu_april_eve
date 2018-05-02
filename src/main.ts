import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));




/*
component==> Logic html css
module==> declration [central / main file]
pipe==> modulate the UI
service==> Contact to 3rd party 
gaurds==> Route Gaurds
*/
