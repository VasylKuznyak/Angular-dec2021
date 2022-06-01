import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

import {IImages, IMovie, IMovies} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  language: string = 'uk-UA';
  movies: IMovies;

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${urls.movies}`,
      {params: {page, language: this.language}});
  }

  getById(id: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movie}/${id}`,
      {params: {language: this.language}})
  }

  getMovieImage(id: string): Observable<IImages> {
    return this.httpClient.get<IImages>(`${urls.movie}/${id}/images`)
  }

}
