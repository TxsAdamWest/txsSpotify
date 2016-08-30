import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component/';
import {SearchComponent} from './components/search/search.component/';
import {AboutComponent} from './components/about/about.component/';
import {HTTP_PROVIDERS} from '@angular/http'

//Also testing router refactor.
// import {appRouterProviders} from './app.routes/'

//This is a test.
// import { BrowserModule } from '@angular/platform-browser';


// This import might not be needed here.
// import { NgModule } from '@angular/core';

// console.log(NgModule)

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives:[ROUTER_DIRECTIVES, NavbarComponent],
    entryComponents:[SearchComponent, AboutComponent]
})

// This is a test.
// @NgModule({
//   imports: [ BrowserModule , appRouterPro],
//   declarations: [ SearchComponent, AboutComponent],
//   bootstrap:    [ AppComponent ]
// })

export class AppComponent { }
