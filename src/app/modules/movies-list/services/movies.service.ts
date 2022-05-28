import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IMovies} from "../interfaces";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: IMovies;

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IMovies> {
    return this.httpClient.get<IMovies>(urls.movies);
  }
}
