import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Album } from './intefaces';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class MusicService {

  constructor(private http: Http, private auth:AuthService) { }

  albums:Album[] = [];

  getAlbums() {
    let query = 'batman';
    let url = `https://api.spotify.com/v1/search?type=album&q=${query}`;

    return this.http.get(url, {
      headers: new Headers({
        'Authorization': 'Bearer ' + this.auth.getToken()
      })
    });
  }
}
