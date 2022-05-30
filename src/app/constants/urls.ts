import {environment} from "../../environments/environment";

export const imageURL = 'https://image.tmdb.org/t/p/w500';
const {baseURL} = environment;
export const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

export const urls = {
  movies: `${baseURL}/discover/movie`,
  movie: `${baseURL}/movie`,
  genre: `${baseURL}/genre/movie/list`,
}
