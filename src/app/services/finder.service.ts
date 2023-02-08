import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Film} from '../model/film';
import {SearchType} from "../model/search_type";
import {firstValueFrom} from "rxjs";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  public topVideos: Film[] = [];
  public topVideoPage = 1;
  public topVideoTotalPages = 1;
  public topVideoTotalResults = 0;
  public topTvShow: Film[] = [];
  public topTvShowPage = 1;
  public topTvShowTotalPages = 1;
  public topTvShowTotalResults = 0;
  public searchResult: Film[] = [];
  public searchResultPage = 1;
  public searchResultTotalPages = 1;
  public searchResultTotalResults = 0;

  private api_key = '0c118450bc36e5a913145052ab05f1ae';
  private search_key_words = 'tarzan';

  constructor(private http: HttpClient) { }

  private async findFilms(url: string, search_type : SearchType) : Promise<Film[]>{
    let resp = await firstValueFrom(this.http.get<any>(url));
    if(search_type === SearchType.TOP_VIDEO){
      this.topVideoTotalPages = resp.total_pages;
      this.topVideoTotalResults = resp.total_results;
    } else if(search_type === SearchType.TOP_TV_SHOW){
      this.topTvShowTotalPages = resp.total_pages;
      this.topTvShowTotalResults = resp.total_results;
    } else if(search_type === SearchType.SEARCH){
      this.searchResultTotalPages = resp.total_pages;
      this.searchResultTotalResults = resp.total_results;
    }

    return resp.results;
  }

  private async loadPage(url: string, type: SearchType, page: number){
    if (type === SearchType.TOP_VIDEO){
      this.topVideoPage = page;
      this.topVideos = await this.findFilms(this.top_movies_url, type);
    }else if(type === SearchType.TOP_TV_SHOW){
      this.topTvShowPage = page;
      this.topTvShow = await this.findFilms(this.top_tv_show_url, type);
    } else if(type === SearchType.SEARCH){
      this.searchResultPage = page;
      this.searchResult = await this.findFilms(url, type);
    }
  }

  public async loadTop(type: SearchType){
    if (type === SearchType.TOP_VIDEO){
      this.loadPage(this.top_movies_url, type, 1);
    }else if(type === SearchType.TOP_TV_SHOW){
      this.loadPage(this.top_tv_show_url, type, 1);
    }
  }

  public async loadNextPage(type : SearchType, search_key_words?: string){
    if(type === SearchType.TOP_VIDEO){
      if(this.topVideoPage < this.topVideoTotalPages) this.topVideoPage++;
      await this.loadPage(this.top_movies_url, type, this.topVideoPage);
      console.log(this.top_movies_url);
    }
    if(type === SearchType.TOP_TV_SHOW){
      if(this.topTvShowPage < this.topTvShowTotalPages) this.topTvShowPage++;
      await this.loadPage(this.top_tv_show_url, type, this.topTvShowPage);
    }
    if(type === SearchType.SEARCH){
      if(this.searchResultPage < this.searchResultTotalPages) this.searchResultPage++;
      if(search_key_words && search_key_words !== this.search_key_words) this.searchResultPage = 1;
      if(search_key_words) this.search_key_words = search_key_words;
      await this.loadPage(this.search_url, type, this.searchResultPage);
    }
  }

  public async loadPreviousPage(type : SearchType, search_key_words?: string){
    if(type === SearchType.TOP_VIDEO){
      if(this.topVideoPage > 1) this.topVideoPage--;
      await this.loadPage(this.top_movies_url, SearchType.TOP_VIDEO, this.topVideoPage);
    }
    if(type === SearchType.TOP_TV_SHOW){
      if(this.topTvShowPage > 1) this.topTvShowPage--;
      await this.loadPage(this.top_tv_show_url, SearchType.TOP_TV_SHOW, this.topTvShowPage);
    }
    if(type === SearchType.SEARCH){
      if(this.searchResultPage > 1) this.searchResultPage--;
      if(search_key_words && search_key_words !== this.search_key_words) this.searchResultPage = 1;
      if(search_key_words) this.search_key_words = search_key_words;
      await this.loadPage(this.search_url, SearchType.SEARCH, this.searchResultPage);
    }
  }

  private get top_movies_url(): string{
    return 'https://api.themoviedb.org/3/discover/movie?api_key=' + this.api_key + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + this.topVideoPage + '&with_watch_monetization_types=flatrate';
  }
  private get top_tv_show_url(): string{
    return 'https://api.themoviedb.org/3/discover/tv?api_key=' + this.api_key + '&language=en-US&sort_by=popularity.desc&page=' + this.topTvShowPage + '&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0';
  }
  private get search_url(): string{
    return 'https://api.themoviedb.org/3/search/movie?api_key=' + this.api_key + '&language=en-US&sort_by=popularity.desc&page=' + this.topTvShowPage + '&query=' + this.search_key_words;
  }
}
