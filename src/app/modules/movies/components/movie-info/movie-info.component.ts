import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';

import {environment} from "../../../../../environments/environment";
import {MoviesService} from "../../services";
import {IMovie} from "../../interfaces";

const {baseImageURL} = environment;

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  movie: IMovie;
  image: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['movie'];
      if (state) {
        this.movie = state;
      } else {
        this.moviesService.getById(id).subscribe(movie => {
          this.movie = movie;
        });
      }
      this.moviesService.getMovieImage(id).subscribe(value => {
        const differentPosters = value.backdrops.length;
        const {file_path} = value.backdrops[Math.floor(Math.random() * differentPosters)]
        this.image = `${baseImageURL}${file_path}`;
      })
    });
  }

}
