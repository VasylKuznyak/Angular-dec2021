import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {environment} from "../../../../environments/environment";
import {IMovie, IMovies} from "../interfaces";
import {urls} from "../../../constants";

const {apiKey} = environment;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: IMovies;

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${urls.movies}?api_key=${apiKey}`);
  }

  getById(id: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movie}/${id}?api_key=${apiKey}`)
  }

  getMovieImage(id: string): Observable<any> {
    return this.httpClient.get<any>(`${urls.movie}/${id}/images?api_key=${apiKey}`)
  }
}
