import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from './playlist';

@Component({
  selector: 'playlist-details',
  template: `
  <modal *ngIf="mode == 'show'" [title]="playlist.name">
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
    <footer>
      <button class="btn btn-success float-right" (click)="edit()">Edit</button>  
    </footer> 
  </modal>

  <modal *ngIf="mode == 'edit'"  [title]="'Edit ' + playlist.name">
    <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" [(ngModel)]="playlist.name">
    </div>
    <div class="form-group">
        <label>Favourite</label>
        <input type="checkbox" [(ngModel)]="playlist.favourite">
    </div>
    <div class="form-group">
        <label>Color</label>
        <input type="color" [(ngModel)]="playlist.color">
    </div>
    <footer>
      <button class="btn btn-success float-right" (click)="save()">Save</button>
      <button class="btn btn-danger float-right" (click)="reset()">Cancel</button>
    </footer> 
  </modal>
  `,
  // inputs:[
  //   'playlist:playlist'
  // ],
  styles: []
})
export class PlaylistDetailsComponent implements OnInit {


  @Input()
  playlist: Playlist

  mode = 'show'

  edit() {
    this.mode = 'edit'
  }

  save() {
    console.log('save')
  }

  reset() {
    this.mode = 'show'
  }

  constructor() { }

  ngOnInit() {
  }

}
