import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

//Testing Route pathing.  
// import { SearchComponent } from './components/search/search.component'
// import { AboutComponent } from './components/about/about.component'


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
