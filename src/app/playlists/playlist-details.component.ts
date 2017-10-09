import { Component, OnInit } from '@angular/core';
import { Playlist } from './playlist';

@Component({
  selector: 'playlist-details',
  template: `
  <div>
  <div class="form-group">
      <label>Name: </label>
      <div class="form-control-static"> {{playlist.name}} </div>
  </div>
  <div class="form-group">
      <label>Favourite: </label>
      <div class="form-control-static"> {{ playlist.favourite? 'Favouite' : 'Nope' }} </div>
  </div>
  <div class="form-group">
      <label>Color: </label>
      <div class="form-control-static" 
        [style.backgroundColor]="playlist.color"> {{ playlist.color }} </div>
  </div>
  </div>

  <div>
    <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" [value]="playlist.name">
    </div>
    <div class="form-group">
        <label>Favourite</label>
        <input type="checkbox" [checked]="playlist.favourite">
    </div>
    <div class="form-group">
        <label>Color</label>
        <input type="color" [value]="playlist.color">
    </div>
  </div>
  `,
  styles: []
})
export class PlaylistDetailsComponent implements OnInit {

  playlist:Playlist = {
    id: 123,
    name: "Angular greatest Hits",
    favourite:false,
    color: "#00ff00",
  }

  constructor() { }

  ngOnInit() {
  }

}
