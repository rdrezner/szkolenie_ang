import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'album-item',
  template: `
    <img class="card-img-top" 
      [src]="album.images[0].url" 
      alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">{{album.name}}</h4>
    </div>
  `,
  styles: []
})
export class AlbumItemComponent implements OnInit {

  @Input()
  album;

  constructor() { }

  ngOnInit() {
  }

}
