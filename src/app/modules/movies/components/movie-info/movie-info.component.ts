import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {MoviesService} from "../../services";
import {IMovie} from "../../interfaces";
import {imageURL} from "../../../../constants";
import {environment} from "../../../../../environments/environment";

const {apiKey} = environment;

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
        this.moviesService.getById(id, apiKey).subscribe(movie => {
          this.movie = movie;
        });
      }
      this.moviesService.getMovieImage(id, apiKey).subscribe(value => {
        const {file_path} = value.backdrops[0]
        this.image = `${imageURL}${file_path}`;
      })
    });
  }

}
