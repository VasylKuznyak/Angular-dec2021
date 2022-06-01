import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {DataService} from "../../services";
import {IGenre} from "../../interfaces";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input()
  genre: IGenre;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router) {
  }

  ngOnInit(): void {

  }

  chooseGenre() {
    const {id} = this.genre;
    this.activatedRoute.queryParams.subscribe(({with_genres}) => {
      this.dataService.storageGenre.next(id);
      this.router.navigate(
        [],
        {queryParams: {with_genres: id}}).then();
    });
  }
}
