import { Component, OnInit } from '@angular/core';
import { FinderService } from '../services/finder.service';

@Component({
  selector: 'app-top-videos',
  templateUrl: './top-videos.component.html',
  styleUrls: ['./top-videos.component.scss']
})
export class TopVideosComponent implements OnInit {
  
  constructor(public finder: FinderService){}
  
  async ngOnInit() {
    await this.finder.loadTopFilms();
  }

}
