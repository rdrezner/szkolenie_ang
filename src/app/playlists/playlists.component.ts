import { Component, OnInit } from '@angular/core';
import { Playlist } from './playlist';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'playlists',
  template: `
    <div class="row">
      <div class="col">
        <playlists-list [playlists]="playlists$ | async" [(selected)]="selected">
        </playlists-list>
      </div>
      <div class="col" *ngIf="selected">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class PlaylistsComponent implements OnInit {

  selected: Playlist;

  playlists$

  constructor(private playlistService:PlaylistsService) { 
    this.playlists$ = this.playlistService.getPlaylists();
  }

  ngOnInit() {
  }

}
