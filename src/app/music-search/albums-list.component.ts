import { Component, OnInit, OnDestroy } from '@angular/core';
import { Album } from './intefaces';
import { MusicService } from './music.service';
import { Subscription } from 'rxjs/Subscription';

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
export class AlbumsListComponent implements OnInit, OnDestroy {
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  albums:Album[];

  myTrack(index, item) {
    return item.id;
  }

  constructor(private service:MusicService) { }

  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.service.getAlbums().subscribe(
      albums => this.albums = albums,
      err => console.log(err)
    );
  }

}
