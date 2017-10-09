import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playlists',
  template: `
    <p>
      playlists Works!
    </p>
    <playlists-list class="klasa"></playlists-list>
  `,
  styles: []
})
export class PlaylistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
