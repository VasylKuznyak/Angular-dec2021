import {ActivatedRoute, Router} from "@angular/router";
import {Component, Input, OnInit} from '@angular/core';

import {DataService, MoviesService} from "../../services";
import {urls} from "../../../../constants";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  imageEndPoint: string;
  movieDetails: IMovie;
  @Input()
  isDarkTheme: boolean;
  @Input()
  movie: IMovie;
  image: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private dataService: DataService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.moviesService.getById(this.movie.id).subscribe(movie => {
      this.movieDetails = movie;
      this.image = `${urls.image}${this.imageEndPoint}`;
     });
  }

  navigateToInfo(): void {
    this.dataService.storagePage.subscribe(page => {
      this.router.navigate([this.movie.id], {
        relativeTo: this.activatedRoute,
        state: {movie: this.movieDetails},
        queryParams: {page: page},
      }).then();
    });

    window.scroll({
      top: 0,
      left: 100,
      behavior: 'smooth'
    });
  }
}
