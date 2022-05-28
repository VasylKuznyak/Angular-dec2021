import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IMovie} from "../../interfaces";
import {imageURL} from "../../../../constants";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: IMovie;
  @Input() imageEndpoint: string;
  image: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.image = `${imageURL}${this.imageEndpoint}`;
  }

  navigateToInfo(): void {
    this.router.navigate([this.movie.id], {
      relativeTo: this.activatedRoute,
      state: {movie: this.movie},
    }).then();
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

}
