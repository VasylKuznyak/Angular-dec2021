import {ActivatedRoute, Router} from "@angular/router";
import {Component, Input, OnInit} from '@angular/core';

import {DataService} from "../../services";
import {urls} from "../../../../constants";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  imageEndpoint: string;
  @Input()
  isDarkTheme: boolean;
  @Input()
  movie: IMovie;
  image: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.image = `${urls.image}${this.imageEndpoint}`;

    console.log(this.movie)
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
      behavior: 'smooth',
    });
  }
}
