import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Playlist } from './playlist';

@Component({
  selector: 'playlists-list',
  template: `
    <div class="list-group">
      <div class="list-group-item"
          *ngFor="let playlist of playlists"
          [class.active]="selected == playlist"
          (click)="select(playlist)"
          (mouseenter)="hover = playlist"
          (mouseleave)="hover = false"
          [style.borderLeftColor]="(hover == playlist ? playlist.color : 'inherit')">
        {{playlist.name}}
      </div>
    </div>
  `,
  styles: [`
    .list-group-item {
      border-left-width: 15px;
    }
  `]
})
export class PlaylistsListComponent implements OnInit {

  @Input()
  selected: Playlist;

  @Input('playlists')
  playlists: Playlist[] = [];

  @Output('selectedChange')
  selectedChange = new EventEmitter<Playlist>();

  hover;

  select(playlist) {
    this.selectedChange.emit(playlist);
  }

  constructor() { }

  ngOnInit() {
  }

}
