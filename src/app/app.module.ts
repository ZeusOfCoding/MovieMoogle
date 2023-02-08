import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './template/entete/entete.component';
import { PiedsComponent } from './template/pieds/pieds.component';
import { RechercheComponent } from './recherche/recherche.component';
import { FavorisComponent } from './favoris/favoris.component';
import { DetailsComponent } from './details/details.component';
import { TopVideosComponent } from './top-videos/top-videos.component';
import { FimlDisplayComponent } from './fiml-display/fiml-display.component';
import { TopTvShowComponent } from './top-tv-show/top-tv-show.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedsComponent,
    RechercheComponent,
    FavorisComponent,
    DetailsComponent,
    TopVideosComponent,
    FimlDisplayComponent,
    TopTvShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
