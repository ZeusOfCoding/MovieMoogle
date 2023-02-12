import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../model/film";
import {FinderService} from "../services/finder.service";

@Component({
  selector: 'app-fiml-display',
  templateUrl: './fiml-display.component.html',
  styleUrls: ['./fiml-display.component.scss']
})
export class FimlDisplayComponent implements OnInit{
  @Input() film!: Film;
  @Input() titleLengthLimit: number = 25;
  @Input() descriptionLengthLimit: number = 25;


  constructor(private finder: FinderService) {
  }

  ngOnInit() {
  }

  gotoDescripton(film: Film) {
  }

  removeFromFavMoviesList(film: Film) {
    this.finder.removeFromFavMovies(film.id);
  }

  addToFavMoviesList(film: Film) {
    this.finder.addToFavMovies(film.id);
  }

  isInFavMoviesList(film: Film) {
    return this.finder.isInFavMovies(film.id);
  }
}
