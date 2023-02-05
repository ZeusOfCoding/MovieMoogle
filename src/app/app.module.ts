import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { PiedsComponent } from './pieds/pieds.component';
import { RechercheComponent } from './recherche/recherche.component';
import { FavorisComponent } from './favoris/favoris.component';
import { DetailsComponent } from './details/details.component';
import { TopVideosComponent } from './top-videos/top-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedsComponent,
    RechercheComponent,
    FavorisComponent,
    DetailsComponent,
    TopVideosComponent
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
