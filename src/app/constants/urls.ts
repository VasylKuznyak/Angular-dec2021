import {environment} from "../../environments/environment";

const {baseURL, baseImageURL} = environment;

export const urls = {
  movies: `${baseURL}/discover/movie`,
  movie: `${baseURL}/movie`,
  genre: `${baseURL}/genre/movie/list`,
  image: `${baseImageURL}`
}
