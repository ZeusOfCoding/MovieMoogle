import {Component, OnInit} from '@angular/core';
import {Film} from "../model/film";
import {FinderService} from "../services/finder.service";

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit{

  favMovies: Film[] = [];

  constructor(public finder: FinderService) {

  }

  ngOnInit(): void {
  }

}
