import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'playlists-list',
  template: `
    <p>
      playlists-list Works!
    </p>
    <playlist-item></playlist-item>
  `,
  // encapsulation: ViewEncapsulation.Emulated,
  styles: [`
    :host-context(playlists){
      color:red !important;
    }

    :host(.klasa){
      border:1px solid black;
      display:block;
    }
    :host() ::ng-deep p{
      color: hotpink;
    }
  `]
})
export class PlaylistsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
