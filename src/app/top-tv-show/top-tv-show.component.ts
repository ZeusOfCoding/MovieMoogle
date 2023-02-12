import {Component, OnInit} from '@angular/core';
import {FinderService} from "../services/finder.service";
import {SearchType} from "../model/search_type";

@Component({
  selector: 'app-top-tv-show',
  templateUrl: './top-tv-show.component.html',
  styleUrls: ['./top-tv-show.component.scss']
})
export class TopTvShowComponent  implements OnInit {

  public titleLengthLimit!: number;
  public descriptionLengthLimit!: number;
  constructor(public finder: FinderService){}

  async ngOnInit() {
    await this.finder.loadCurrentPage(SearchType.TOP_TV_SHOW);
    this.titleLengthLimit = this.finder.topTvShow.map(f => f.original_name.length).sort((a,b) => a-b)[0];
    this.titleLengthLimit = this.titleLengthLimit < 25 ? 25 : this.titleLengthLimit;
    this.descriptionLengthLimit = this.finder.topTvShow.map(f => f.overview.length).sort((a,b) => a-b)[0];
    // console.log(this.finder.topVideos.map(f => f.overview.length).sort((a,b) => a-b));
    console.log(this.descriptionLengthLimit);
  }

  onNextPage(){
    this.finder.loadNextPage(SearchType.TOP_TV_SHOW);
  }
  onPreviousPage(){
    this.finder.loadPreviousPage(SearchType.TOP_TV_SHOW);
  }

}
