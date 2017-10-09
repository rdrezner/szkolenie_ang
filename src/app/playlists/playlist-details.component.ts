import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from './playlist';

@Component({
  selector: 'playlist-details',
  template: `
  <div *ngIf="mode == 'show'">
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
    <button class="btn btn-success float-right" (click)="edit()">Edit</button>
  </div>

  <div *ngIf="mode == 'edit'">
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
    <button class="btn btn-success float-right" (click)="save()">Save</button>
    <button class="btn btn-danger float-right" (click)="reset()">Cancel</button>
  </div>
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
