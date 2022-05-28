import {IMovie} from "./movie.intrerface";

export interface IMovies {
  page: string,
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
