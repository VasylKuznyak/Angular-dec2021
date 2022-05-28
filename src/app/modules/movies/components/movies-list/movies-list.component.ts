import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {environment} from "../../../../../environments/environment";
import {MoviesService} from "../../services";
import {IMovie} from "../../interfaces";

const {apiKey} = environment;

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: IMovie[];
  page: number;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page, key}) => {
      this.moviesService.getAll(page ? page : 1, apiKey).subscribe(({results}) => {
          this.movies = results;
        })
    });
  }
}



