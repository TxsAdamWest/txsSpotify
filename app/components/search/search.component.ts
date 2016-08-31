import {Component} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../../Artist'

@Component({
	moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [SpotifyService]
})

export class SearchComponent {
	searchStr: string; //Accesses our input's value.
	searchRes: Artist[];


	constructor(private _spotifyService:SpotifyService){ // Here we inject our SpotifyService.

	}

	searchMusic(){
		// console.log(this.searchStr)
		// console.log("Test!")
		this._spotifyService.searchMusic(this.searchStr)
			.subscribe(res => {
				this.searchRes = res.artists.items
				// console.log(this.searchRes)
			})
	}
 }