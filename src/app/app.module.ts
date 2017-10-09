import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistsListComponent } from './playlists/playlists-list.component';
import { PlaylistDetailsComponent } from './playlists/playlist-details.component';
import { PlaylistItemComponent } from './playlists/playlist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    PlaylistsListComponent,
    PlaylistDetailsComponent,
    PlaylistItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
