import {ActivatedRoute, Router} from "@angular/router";
import {Component, Input, OnInit} from '@angular/core';

import {environment} from "../../../../../environments/environment";
import {DataService} from "../../services";
import {IMovie} from "../../interfaces";

const {baseImageURL} = environment;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: IMovie;
  @Input()
  imageEndpoint: string;
  image: string;
  @Input()
  isDarkTheme: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) {
  }

  ngOnInit(): void {
    this.image = `${baseImageURL}${this.imageEndpoint}`;
  }

  navigateToInfo(): void {
    this.dataService.storagePage.subscribe(page => {
      this.router.navigate([this.movie.id], {
        relativeTo: this.activatedRoute,
        state: {movie: this.movie},
        queryParams: {page: page}
      }).then();
    });

    window.scroll({
      top: 0, left: 0,
      behavior: 'auto'
    });
  }

}
