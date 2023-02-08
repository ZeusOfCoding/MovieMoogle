import {Component, OnInit} from '@angular/core';
import {FinderService} from "../services/finder.service";
import {SearchType} from "../model/search_type";

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {

  public searchKeyWords = 'Tarzan';
  constructor(public finder: FinderService){}

  async ngOnInit() {
    await this.finder.loadTop(SearchType.SEARCH);
  }

  onNextPage(){
    this.finder.loadNextPage(SearchType.SEARCH);
  }
  onPreviousPage(){
    this.finder.loadPreviousPage(SearchType.SEARCH);
  }

  onSearch(){
    console.log(this.searchKeyWords);
  }

}
