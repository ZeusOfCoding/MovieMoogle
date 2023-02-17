import {Component, OnInit} from '@angular/core';
import {FinderService} from "../services/finder.service";
import {SearchType} from "../model/search_type";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss']
})
export class RechercheComponent implements OnInit {

  public searchKeyWords!: string;
  public titleLengthLimit!: number;
  public descriptionLengthLimit!: number;
  constructor(public finder: FinderService){}

  async ngOnInit() {
    this.searchKeyWords = this.finder.search_key_words;
    await this.finder.loadCurrentPage(SearchType.SEARCH);
  }

  onNextPage(){
    this.finder.loadNextPage(SearchType.SEARCH, this.searchKeyWords);
  }
  onPreviousPage(){
    this.finder.loadPreviousPage(SearchType.SEARCH, this.searchKeyWords);
  }

  onSearch(formulaire: NgForm){
    this.onNextPage();
    console.log(formulaire.value);
  }

}
