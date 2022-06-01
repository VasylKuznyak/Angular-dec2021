import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';

import {DataService} from "../../modules";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDarkTheme: boolean;
  page: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.setPaginate();
    this.dataService.storageTheme.subscribe(theme => this.isDarkTheme = theme);
  }

  toggleTheme() {
    this.dataService.storageTheme.next(!this.isDarkTheme);
  }

  setPaginate(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.dataService.storagePage.subscribe(page => this.page = page);

      this.router.navigate(
        [],
        {queryParams: {page: this.page}}).then();
    });
  }

  pageForward(): void {
    this.dataService.storagePage.next(this.page + 1);
    this.router.navigate(
      [],
      {queryParams: {page: this.page}}).then();
  }

  pageBack(): void {
    this.dataService.storagePage.next(this.page > 1 ? this.page - 1 : 1);
    this.router.navigate(
      [],
      {queryParams: {page: this.page > 1 ? this.page - 1 : 1}}).then();
  }
}
