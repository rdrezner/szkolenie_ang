import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from './playlists.service';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'playlist-container',
  template: `
    <playlist-details *ngIf="selected$ | async" [playlist]="selected$ | async"></playlist-details>
  `,
  styles: []
})
export class PlaylistContainerComponent implements OnInit {

  constructor(private service:PlaylistsService, private route:ActivatedRoute) {
   }

  selected$;

  ngOnInit() {
    this.selected$ = this.route.params
      .pluck('id')
      .map(parseInt)
      .switchMap(id => this.service.getPlaylist(id));
  }

}
