import {Component, OnInit} from '@angular/core';
import {FinderService} from '../services/finder.service';
import {SearchType} from "../model/search_type";

@Component({
  selector: 'app-top-videos',
  templateUrl: './top-videos.component.html',
  styleUrls: ['./top-videos.component.scss']
})
export class TopVideosComponent implements OnInit {

  public titleLengthLimit!: number;
  public descriptionLengthLimit!: number;
  constructor(public finder: FinderService){}

  async ngOnInit() {
    await this.finder.loadCurrentPage(SearchType.TOP_VIDEO);
    this.titleLengthLimit = this.finder.topVideos.map(f => f.original_title.length).sort((a,b) => a-b)[0];
    this.titleLengthLimit = this.titleLengthLimit < 25 ? 25 : this.titleLengthLimit;
    this.descriptionLengthLimit = this.finder.topVideos.map(f => f.overview.length).sort((a,b) => a-b)[0];
    // console.log(this.finder.topVideos.map(f => f.overview.length).sort((a,b) => a-b));
    console.log(this.descriptionLengthLimit);
    // console.log(this.finder.topVideos);
    // console.log(this.finder.topVideos.map(f => f.original_title.length));
    // console.log(this.finder.topVideos.map(f => f.original_title.length).sort((a,b) => a-b));
    // console.log(this.finder.topVideos.map(f => f.original_title.length).sort((a,b) => a-b)[0]);
  }

  onNextPage(){
    this.finder.loadNextPage(SearchType.TOP_VIDEO);
  }
  onPreviousPage(){
    this.finder.loadPreviousPage(SearchType.TOP_VIDEO);
  }

}
