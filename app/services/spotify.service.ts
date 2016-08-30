import { Injectable } from '@angular/core'; // We will need dependancy injection, so we will import Injectable from angular core.
import { Http, Headers } from '@angular/http'; // Http Module as well... importing.
import 'rxjs/add/operator/map'; // Also require observable, so we will import these functions as well.

@Injectable()
export class SpotifyService{ // Inside here we will make our api request.
	private searchUrl: string; // This is where we collect our search string as the user is typing.

	constructor(private _http:Http) {

	}

	searchMusic(str: string, type='artist') {// It will then get passed in here as an input to searchMusic() where it will be concatenated into our search Url.
		this.searchUrl = 'https://api.spotify.com/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US'; //Following the url structure as listed in spotify's api docs.
		return this._http.get(this.searchUrl)//_http.get() will fetch our data with the searchUrl we've created.
			.map(res => res.json())// Then map our results into an array.
	}
}