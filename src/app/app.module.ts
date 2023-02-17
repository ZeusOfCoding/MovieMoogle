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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TvShowDisplayComponent } from './tv-show-display/tv-show-display.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";

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
    TopTvShowComponent,
    TvShowDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      easing: 'ease-in',
      easeTime: 500,
      timeOut: 2500,
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
