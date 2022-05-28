// https://api.themoviedb.org/3/discover/movie?api_key=c21c4736c06ada4156758164d503e231
// https://api.themoviedb.org/3/genre/movie/list?api_key=c21c4736c06ada4156758164d503e231
import {environment} from "../../environments/environment";
import {apiKey} from "./apiKey";

const {baseURL} = environment;

export const urls = {
  movies: `${baseURL}/discover/movie?api_key=${apiKey}`,
  genre: `${baseURL}/genre/movie?api_key=${apiKey}`,
}
