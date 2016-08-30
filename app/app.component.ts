import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component/';
import {SearchComponent} from './components/search/search.component/';
import {AboutComponent} from './components/about/about.component/';
import {HTTP_PROVIDERS} from '@angular/http'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives:[ROUTER_DIRECTIVES, NavbarComponent],
    entryComponents:[SearchComponent, AboutComponent],
    providers: [HTTP_PROVIDERS]
})


export class AppComponent { }
