import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {DataService, MoviesService} from "../../services";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: IMovie[];
  page: number;
  isDarkTheme: boolean;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.storageTheme.subscribe(theme => this.isDarkTheme = theme);
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.moviesService.getAll(page ? page : 1).subscribe(({results}) => {
        this.movies = results;
      })
    });
  }

}



