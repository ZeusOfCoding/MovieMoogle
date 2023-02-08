import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FavorisComponent } from './favoris/favoris.component';
import { RechercheComponent } from './recherche/recherche.component';
import { TopVideosComponent } from './top-videos/top-videos.component';
import {TopTvShowComponent} from "./top-tv-show/top-tv-show.component";

const routes: Routes = [
  {path : '', component: TopVideosComponent},
  {path : 'top', component: TopVideosComponent},
  {path : 'top-tv', component: TopTvShowComponent},
  {path : 'fav', component: FavorisComponent},
  {path : 'find', component: RechercheComponent},
  {path : 'details', component: DetailsComponent},
  {path : '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
