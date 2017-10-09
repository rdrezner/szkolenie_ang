import { Component, OnInit,ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { Playlist } from './playlist';

// <ng-template [ngFor]="let playlist" [ngForOf]="playlists"></ng-template>

@Component({
  selector: 'playlists-list',
  template: `
    <div class="list-group">
      <div class="list-group-item" 
          *ngFor="let playlist of playlists"
          [class.active]="selected == playlist"
          (click)="select(playlist)">
        {{playlist.name}}
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.Emulated,
  styles: []
})
export class PlaylistsListComponent implements OnInit {
  
  @Input()
  selected:Playlist

  @Input('playlists')
  playlists: Playlist[] = []

  @Output('selectedChange')
  selectedChange = new EventEmitter<Playlist>()

  select(playlist){
    this.selectedChange.emit(playlist)
  }

  constructor() { }

  ngOnInit() {
  }

}
