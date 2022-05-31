import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Component, Input, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";

import {environment} from "../../../../../environments/environment";
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
  currentPage: Observable<any>;
  @Input()
  isDarkTheme: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.image = `${baseImageURL}${this.imageEndpoint}`;
  }

  navigateToInfo(): void {
    this.currentPage = this.activatedRoute.queryParamMap.pipe(
      map((params: ParamMap) => params.get('page')));
    this.currentPage.subscribe(page => this.currentPage = page);

    this.router.navigate([this.movie.id], {
      relativeTo: this.activatedRoute,
      state: {movie: this.movie},
      queryParams: {page: this.currentPage}
    }).then();

    window.scroll({
      top: 0, left: 0,
      behavior: 'smooth'
    });
  }

}
