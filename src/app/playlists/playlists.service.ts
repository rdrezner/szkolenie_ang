import { Injectable } from '@angular/core';
import { Playlist } from './playlist';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class PlaylistsService {

  constructor() { }

  getPlaylists() {
    return Observable.of(this.playlists);
  }

  getPlaylist(id) {
    return Observable.of(this.playlists.find(playlist => playlist.id == id));
  }

  playlists: Playlist[] = [
    {
      id: 1,
      name: 'Angular greatest Hits',
      favourite: false,
      color: '#ff0000',
    },
    {
      id: 2,
      name: 'Best of Angular',
      favourite: true,
      color: '#00ff00',
    },
    {
      id: 3,
      name: 'Angular TOP20',
      favourite: false,
      color: '#0000ff',
    }
  ];

}
