import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService{
	private searchUrl: string;

	constructor(private _http:Http) {

	}

	searchMusic(str: string, type='artist') {
		this.searchUrl = 'https://api.spotify.com/search'
	}
}