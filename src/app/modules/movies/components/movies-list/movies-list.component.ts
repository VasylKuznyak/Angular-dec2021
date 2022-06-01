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
  isDarkTheme: boolean;
  movies: IMovie[];
  page: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.storageTheme.subscribe(theme => this.isDarkTheme = theme);
    this.dataService.storagePage.subscribe(page => {
      this.moviesService.getAll(page).subscribe(({results}) => {
        this.movies = results;
      });
    });
  }

}



