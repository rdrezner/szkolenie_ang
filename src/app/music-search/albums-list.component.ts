import { Component, OnInit } from '@angular/core';
import { Album } from './intefaces';
import { MusicService } from './music.service';

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

  albums:Album[];

  myTrack(index, item) {
    return item.id;
  }

  constructor(private service:MusicService) { }

  ngOnInit() {
    this.service.getAlbums().subscribe(response => {
      let data = response.json();
      this.albums = <Album[]>(data.albums.items);
    });
  }

}
