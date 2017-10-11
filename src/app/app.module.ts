import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

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
import { PlaylistsService } from './playlists/playlists.service';
import { RoutingModule } from './app-routing';
import { PlaylistContainerComponent } from './playlists/playlist-container.component';
import { TestingComponent } from './testing.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    PlaylistsListComponent,
    PlaylistDetailsComponent,
    PlaylistItemComponent,
    ModalComponent,
    HighlightDirective,
    UnlessDirective,
    PlaylistContainerComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    MusicSearchModule
  ],
  providers: [
    AuthService,
    PlaylistsService
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
