import {Component, OnInit} from '@angular/core';

import {DataService, GenresService} from "../../services";
import {IGenre} from "../../interfaces";

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {
  isDarkTheme: boolean;
  genres: IGenre[];

  constructor(
    private genresService: GenresService,
    private dataService: DataService) {
  }

  ngOnInit(): void {
    this.genresService.getAll().subscribe(genres => this.genres = genres.genres);
    this.dataService.storageTheme.subscribe(theme => this.isDarkTheme = theme);
  }

  resetFilters() {
    this.dataService.storageGenre.next(null);
  }
}
