import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playlists',
  template: `
    <div class="row">
      <div class="col">
        <playlists-list></playlists-list>
      </div>
      <div class="col">
        <playlist-details></playlist-details>
      </div>
    </div>    
  `,
  styles: []
})
export class PlaylistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
