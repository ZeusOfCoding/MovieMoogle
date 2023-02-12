export class TvShow {
  constructor(
    public poster_path: string,
    public popularity: number,
    public id: number,
    public backdrop_path: string,
    public vote_average: number,
    public overview: string,
    public first_air_date: string,
    public origin_country: string[],
    public genre_ids: number[],
    public original_language: string,
    public vote_count: number,
    public name: string,
    public original_name: string
  ) {}
}
