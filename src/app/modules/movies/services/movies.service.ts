import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IMovie, IMovies} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: IMovies;

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number = 1, api_key: string): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${urls.movies}`, {params: {page, api_key}});
  }

  getById(id: string, api_key: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movie}/${id}`, {params: {api_key}})
  }

  getMovieImage(id: string, api_key: string): Observable<any> {
    return this.httpClient.get<any>(`${urls.movie}/${id}/images`, {params: {api_key}})
  }
}
