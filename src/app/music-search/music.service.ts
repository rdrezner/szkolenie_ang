import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Album } from './intefaces';
import { AuthService } from '../auth/auth.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MusicService {

  constructor(private http: Http, private auth:AuthService) {

    this.albums$ = this.queries$
    .filter( ({length}) => length >= 3 )
    .distinctUntilChanged()
    .map(query => `https://api.spotify.com/v1/search?type=album&q=${query}`)
    .switchMap(url => this.http.get(url))
    .map(response => {
      let data = response.json();
      return <Album[]>(data.albums.items);
    })
    .catch(err => {
      //this.auth.authorize();
      return [];
    });

    this.queries$.next("batman");
  }

  albums$;

  queries$ = new BehaviorSubject<string>( "batman" );

  search(query) {
    this.queries$.next(query);
  }

  getAlbums() {
    return this.albums$;
  }
}
