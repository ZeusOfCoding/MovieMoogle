import {Component, OnInit} from '@angular/core';
import {FinderService} from "../services/finder.service";
import {SearchType} from "../model/search_type";

@Component({
  selector: 'app-top-tv-show',
  templateUrl: './top-tv-show.component.html',
  styleUrls: ['./top-tv-show.component.scss']
})
export class TopTvShowComponent  implements OnInit {

  constructor(public finder: FinderService){}

  async ngOnInit() {
    await this.finder.loadTop(SearchType.TOP_TV_SHOW);
  }

  onNextPage(){
    this.finder.loadNextPage(SearchType.TOP_TV_SHOW);
  }
  onPreviousPage(){
    this.finder.loadPreviousPage(SearchType.TOP_TV_SHOW);
  }

}
