import {Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

//These are test imports.
// import { NgModule }       from '@angular/core';
// import { BrowserModule  } from '@angular/platform-browser';
// import { AppComponent }   from '../../app.component';


@Component({
	moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [SpotifyService]
})

export class SearchComponent {
	//NgModel isn't working properly, for now I cannot access this value.
	searchStr: string;

	constructor(private _spotifyService:SpotifyService){ // Here we inject our SpotifyService.

	}

	searchMusic(){
		console.log(this.searchStr)
		console.log("Test!")
	// 	this._spotifyService.searchMusic(this.searchStr)
	// 		.subscribe(res => {
	// 			console.log(res.artists.items)
	// 		})
	// }
 }