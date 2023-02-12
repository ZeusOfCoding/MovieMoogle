import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../model/film";
import {TvShow} from "../model/tvShow";

@Component({
  selector: 'app-tv-show-display',
  templateUrl: './tv-show-display.component.html',
  styleUrls: ['./tv-show-display.component.scss']
})
export class TvShowDisplayComponent  implements OnInit{
  @Input() tvShow!: TvShow;
  @Input() titleLengthLimit: number = 25;
  @Input() descriptionLengthLimit: number = 25;

  ngOnInit() {
  }
}
