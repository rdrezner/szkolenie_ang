import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'albums-list',
  template: `
  <div class="card-group">
    <div album-item class="card" 
      *ngFor="let album of albums">
    </div>
  </div>
  `,
  styles: [`
    .card {
      min-width:25%;
      max-width:25%;
    }
  `]
})
export class AlbumsListComponent implements OnInit {

  albums = [1,2,3,4,5,6,7,8];

  constructor() { }

  ngOnInit() {
  }

}
