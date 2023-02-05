import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../model/film';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  public topVideos: Film[] = [];

  //https://api.themoviedb.org/3/search/movie?api_key=0c118450bc36e5a913145052ab05f1ae&query=Jack+Reacher
  private api_key = '0c118450bc36e5a913145052ab05f1ae';
  private base_url = 'https://api.themoviedb.org/3/';

  private top_movies_url = this.base_url + 'discover/movie?api_key=' + this.api_key;

  constructor(private http: HttpClient) { }

  public async loadTopFilms(){
    this.topVideos = [];
    await this.http.get<any>(this.top_movies_url)
    .subscribe(res => {this.topVideos = res.results;
    console.log('we received a total of ' + this.topVideos.length + ' videos');
console.log(this.topVideos);

  });
  }
}
