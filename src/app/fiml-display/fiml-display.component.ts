import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../model/film";

@Component({
  selector: 'app-fiml-display',
  templateUrl: './fiml-display.component.html',
  styleUrls: ['./fiml-display.component.scss']
})
export class FimlDisplayComponent implements OnInit{
  @Input() film!: Film;

  ngOnInit() {
  }

}
