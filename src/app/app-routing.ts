import { RouterModule, Routes } from '@angular/router'
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistContainerComponent } from './playlists/playlist-container.component';

const routes:Routes = [
    {path:'', redirectTo:'playlists', pathMatch:'full'},
    {path:'music', loadChildren: './music-search/music-search.module#MusicSearchModule'},
    {path:'playlists', component:PlaylistsComponent, children: [
        {path: '', component:PlaylistContainerComponent},
        {path: 'show/:id', component:PlaylistContainerComponent}
    ]
    },
    {path:'**', redirectTo:'music'},
]

export const RoutingModule = RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true
})