import { RouterModule, Routes } from '@angular/router'
import { MusicSearchComponent } from './music-search.component';

const routes:Routes = [
    {path:'', component:MusicSearchComponent}
]

export const MusicRoutingModule = RouterModule.forChild(routes)