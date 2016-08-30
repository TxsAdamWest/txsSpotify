import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';

// Testing import providers for router.
import {appRouterProviders} from './app.routes'


//Testing Route pathing.  
import { SearchComponent } from './components/search/search.component'
import { AboutComponent } from './components/about/about.component'


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  // Testing providers import.
  providers: appRouterProviders
})
export class AppModule { }
