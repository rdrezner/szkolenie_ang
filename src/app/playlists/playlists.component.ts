import { Component, OnInit } from '@angular/core';
import { Playlist } from './playlist';

// <ng-template [ngIf]="selected" [ngIfElse]="noSelected"...

@Component({
  selector: 'playlists',
  template: `
    <div class="row">
      <div class="col">
        <playlists-list [playlists]="playlists" [(selected)]="selected">
        </playlists-list>
      </div>
      <div class="col">

      <playlist-details *ngIf="selected; else noSelected" [playlist]="selected"></playlist-details>
      
      <ng-template #noSelected>Please select playlist</ng-template>
      
      </div>
    </div>    
  `,
  styles: []
})
export class PlaylistsComponent implements OnInit {

  selected

  playlists: Playlist[] = [
    {
      id: 1,
      name: "Angular greatest Hits",
      favourite: false,
      color: "#ff0000",
    },
    {
      id: 2,
      name: "Best of Angular",
      favourite: true,
      color: "#00ff00",
    },
    {
      id: 3,
      name: "Angular TOP20",
      favourite: false,
      color: "#0000ff",
    }
  ]

  constructor() { }

  ngOnInit() {
    // this.selected = this.playlists[0]
  }

}
