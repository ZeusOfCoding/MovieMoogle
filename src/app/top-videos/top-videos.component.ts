import {Component, OnInit} from '@angular/core';
import {FinderService} from '../services/finder.service';
import {SearchType} from "../model/search_type";

@Component({
  selector: 'app-top-videos',
  templateUrl: './top-videos.component.html',
  styleUrls: ['./top-videos.component.scss']
})
export class TopVideosComponent implements OnInit {

  constructor(public finder: FinderService){}

  async ngOnInit() {
    await this.finder.loadTop(SearchType.TOP_VIDEO);
  }

  onNextPage(){
    this.finder.loadNextPage(SearchType.TOP_VIDEO);
  }
  onPreviousPage(){
    this.finder.loadPreviousPage(SearchType.TOP_VIDEO);
  }

}
