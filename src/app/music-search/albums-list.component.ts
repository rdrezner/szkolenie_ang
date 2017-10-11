import { Component, OnInit } from '@angular/core';
import { Album } from './intefaces';
import { MusicService } from './music.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'albums-list',
  template: `
  <div class="card-group">
    <album-item [album]="album" class="card" 
      *ngFor="let album of (albums$ | async); trackBy myTrack">
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
  
  albums$;
  
  constructor(private service:MusicService) { }
  
  ngOnInit() {
    this.albums$ = this.service.getAlbums();
  }
  
  myTrack(index, item) {
    return item.id;
  }
}
