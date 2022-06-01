import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

import {IImages, IMovie, IMovies} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private _language = 'uk-UA';
  movies: IMovies;

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number = 1): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${urls.movies}`,
      {params: {page, language: this._language}});
  }

  getById(id: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movie}/${id}`,
      {params: {language: this._language}})
  }

  getMovieImage(id: string): Observable<IImages> {
    return this.httpClient.get<IImages>(`${urls.movie}/${id}/images`)
  }

}
