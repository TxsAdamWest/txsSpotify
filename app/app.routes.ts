import { provideRouter, RouterConfig } from '@angular/router';
import { SearchComponent } from './components/search/search.component'
import { AboutComponent } from './components/about/about.component'

const routes: RouterConfig = [
	{ path:'', component:SearchComponent }, // A blank path will represent the Home page, which is our seach componnent here.
	{ path:'about', component:AboutComponent } // The about page will be named accordingly.
];

export const appRouterProviders = [
	provideRouter(routes)
]; 