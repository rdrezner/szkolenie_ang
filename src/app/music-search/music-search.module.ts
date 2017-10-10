import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search.component';
import { SearchFormComponent } from './search-form.component';
import { AlbumsListComponent } from './albums-list.component';
import { AlbumItemComponent } from './album-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MusicSearchComponent, 
    SearchFormComponent, 
    AlbumsListComponent, 
    AlbumItemComponent
  ],
  exports: [
    MusicSearchComponent
  ]
})
export class MusicSearchModule { }
