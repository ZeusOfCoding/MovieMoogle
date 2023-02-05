import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FavorisComponent } from './favoris/favoris.component';
import { RechercheComponent } from './recherche/recherche.component';
import { TopVideosComponent } from './top-videos/top-videos.component';

const routes: Routes = [
  {path : '', component: TopVideosComponent},
  {path : 'top', component: TopVideosComponent},
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
