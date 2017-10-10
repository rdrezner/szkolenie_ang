import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistsListComponent } from './playlists/playlists-list.component';
import { PlaylistDetailsComponent } from './playlists/playlist-details.component';
import { PlaylistItemComponent } from './playlists/playlist-item.component';
import { ModalComponent } from './playlists/modal.component';
import { HighlightDirective } from './playlists/highlight.directive';
import { UnlessDirective } from './playlists/unless.directive';
import { MusicSearchModule } from './music-search/music-search.module';
import { AuthService } from './auth/auth.service';
import { MusicService } from './music-search/music.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    PlaylistsListComponent,
    PlaylistDetailsComponent,
    PlaylistItemComponent,
    ModalComponent,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MusicSearchModule,
    HttpModule
  ],
  providers: [
    AuthService,
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private app: ApplicationRef,
    private auth: AuthService
  ) {
    this.auth.getToken();
  }
}
