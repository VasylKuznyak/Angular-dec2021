import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentPage: Observable<any>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentPage = this.activatedRoute.queryParamMap.pipe(
      map((params: ParamMap) => params.get('page')));
    this.currentPage.subscribe(page => this.currentPage = page);
  }

  pageForward(): void {
    this.router.navigate(
      [],
      {queryParams: {page: +this.currentPage + 1}}).then();
  }

  pageBack(): void {
    this.router.navigate(
      [],
      {queryParams: {page: +this.currentPage - 1}}).then();
  }

}
