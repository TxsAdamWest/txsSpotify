import { Component } from '@angular/core';
//Recheck the directory to this file.  Getting 404 errors.
import { SpotifyService } from './../services/spotify.service'

@Component({
	moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [SpotifyService]
})

export class SearchComponent {
	searchStr: string;

	constructor(private, _spotifyService:SpotifyService){

	}

	searchMusic(){
		// console.log(this.searchStr)
		this._spotifyService.searchMusic(this.searchStr)
			.subscribe(res => {
				console.log(res.artists.items)
			})
	}
 }