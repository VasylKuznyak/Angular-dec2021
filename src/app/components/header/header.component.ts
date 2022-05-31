import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";

import {DataService} from "../../modules";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentPage: Observable<any>;
  isDarkTheme: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) {
  }

  ngOnInit(): void {
    this.setPaginate();
    this.dataService.storageTheme.subscribe(theme => this.isDarkTheme = theme);
  }

  toggleTheme() {
    this.dataService.storageTheme.next(!this.isDarkTheme);
  }

  setPaginate(): void {
    this.currentPage = this.activatedRoute.queryParamMap.pipe(
      map((params: ParamMap) => params.get('page')));
    this.currentPage.subscribe(page => this.currentPage = page);
    this.router.navigate(
      [],
      {queryParams: {page: 1}}).then();
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
