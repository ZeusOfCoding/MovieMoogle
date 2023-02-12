import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../model/film";
import {FinderService} from "../services/finder.service";
import {ToastrService} from "ngx-toastr";
import {timeout} from "rxjs";
import {NotifierService} from "../services/notifier.service";

@Component({
  selector: 'app-fiml-display',
  templateUrl: './fiml-display.component.html',
  styleUrls: ['./fiml-display.component.scss']
})
export class FimlDisplayComponent implements OnInit{
  @Input() film!: Film;
  @Input() titleLengthLimit: number = 25;
  @Input() descriptionLengthLimit: number = 25;


  constructor(private finder: FinderService, private notif: NotifierService) {
  }

  ngOnInit() {
  }

  gotoDescripton(film: Film) {
  }

  removeFromFavMoviesList(film: Film) {
    this.finder.removeFromFavMovies(film.id);
    this.notif.warning(`Nouvelle suppression!`, `Le film ${film.original_title} à bien été retiré de la liste des films favoris!`);
  }

  addToFavMoviesList(film: Film) {
    this.finder.addToFavMovies(film.id);
    this.notif.success(`Nouvel ajout!`, `Le film ${film.original_title} à bien été ajouté de la liste des films favoris!`);
  }

  isInFavMoviesList(film: Film) {
    return this.finder.isInFavMovies(film.id);
  }
}
