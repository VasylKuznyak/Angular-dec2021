import {Component, OnInit} from '@angular/core';

import {MoviesService} from "../../services";
import {IMovie} from "../../interfaces/movie.intrerface";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: IMovie[];

  constructor(
    private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getAll().subscribe(({results}) => this.movies = results);
  }

}
