import { Component, OnInit } from '@angular/core';
import { Album } from './intefaces';

@Component({
  selector: 'albums-list',
  template: `
  <div class="card-group">
    <album-item [album]="album" class="card" 
      *ngFor="let album of albums; trackBy myTrack">
    </album-item>
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

  albums:Album[] = [
    {
      id: "123",
      name: "Album",
      artists: [],
      images: [
        {
          height: 200,
          width: 200,
          url: "http://simpleicon.com/wp-content/uploads/flash.png"
        }
      ]
    },
    {
      id: "124",
      name: "Album 2",
      artists: [],
      images: [
        {
          height: 200,
          width: 200,
          url: "http://simpleicon.com/wp-content/uploads/flash.png"
        }
      ]
    }
  ];

  myTrack(index, item) {
    return item.id;
  }

  constructor() { }

  ngOnInit() {
  }

}
