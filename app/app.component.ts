import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component/'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { AboutComponent } from './components/about/about.component/'
import { SearchComponent } from './components/search/search.component/'
import { NgModule }      from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES, NavbarComponent],
    precompile: [SearchComponent, AboutComponent]
})
export class AppComponent { }
