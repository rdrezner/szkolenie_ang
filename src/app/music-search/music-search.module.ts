import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search.component';
import { SearchFormComponent } from './search-form.component';
import { AlbumsListComponent } from './albums-list.component';
import { AlbumItemComponent } from './album-item.component';
import { MusicService } from './music.service';
import { MusicRoutingModule } from './music-search.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MusicRoutingModule
  ],
  declarations: [
    MusicSearchComponent, 
    SearchFormComponent, 
    AlbumsListComponent, 
    AlbumItemComponent
  ],
  exports: [
    MusicSearchComponent
  ],
  providers: [
    MusicService
  ]
})
export class MusicSearchModule { }
