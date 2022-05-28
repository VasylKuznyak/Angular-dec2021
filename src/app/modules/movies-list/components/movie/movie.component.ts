import {Component, Input, OnInit} from '@angular/core';

import {IMovie} from "../../interfaces";
import {imageBaseURL} from "../../../../constants";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: IMovie;
  @Input() imageEndpoint: string;
  image: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.image = `${imageBaseURL}${this.imageEndpoint}`;
  }

  navigateToInfo() {
    this.router.navigate([this.movie.id], {
      relativeTo: this.activatedRoute,
      state: {movie: this.movie},
    }).then();
  }

}
