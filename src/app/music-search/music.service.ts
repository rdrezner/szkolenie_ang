import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Album } from './intefaces';
import { AuthService } from '../auth/auth.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MusicService {

  constructor(private http: Http, private auth:AuthService) { }

  albums$ = new BehaviorSubject<Album[]>( [] );

  search(query) {
    let url = `https://api.spotify.com/v1/search?type=album&q=${query}`;
    
    return this.http.get(url)
      .map(response => {
        let data = response.json();
        return <Album[]>(data.albums.items);
      }).catch(err => {
        this.auth.authorize();
        return [];
      }).subscribe(albums => {
        this.albums$.next(albums);
      });
  }

  getAlbums() {
    return this.albums$.asObservable();
  }
}
