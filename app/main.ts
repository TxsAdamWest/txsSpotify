//RC5 Import Method - Does NOT work .  Debugging.
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';


platformBrowserDynamic().bootstrapModule(AppModule);



//RC4 Import Method - will run currently but ngModel is still unavailable going the RC4 approach.

// import {bootstrap} from '@angular/platform-browser-dynamic'
// import {appRouterProviders} from './app.routes'
// import {AppComponent} from './app.component'
// import {disableDeprecatedForms, provideForms} from '@angular/forms'

// bootstrap(AppComponent, [
// 	appRouterProviders,
// 	disableDeprecatedForms(),
// 	provideForms()
// 	]);


