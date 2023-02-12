import {Component, OnInit} from '@angular/core';
import {Film} from "../model/film";
import {FinderService} from "../services/finder.service";
import {interval, take, tap} from "rxjs";

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit{

  favMovies: Film[] = [];

  constructor(public finder: FinderService) {

  }

  ngOnInit() {
    this.finder.getFavMoviesIds().map((id) => this.finder.getMovie(id).pipe(take(1)).subscribe(e => this.favMovies.push(e)));
  }

  getFilmById(id: number) {
    return this.favMovies.filter(e => e.id === id)[0];
  }
}
