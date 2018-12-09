import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentPath = location.href.split('/')[3];
      }
    });
  }
  // router = this.route.snapshot.subs
  isProducts: boolean;
  currentPath: string;

  getData() {
    // todo implement request
  }

  ngOnInit() {

    // [ngStyle]="{'font-weight': route.snapshot. ? '83vh' : 'unset' }"
    // console.log(this.route.url)
    this.isProducts = false;
  }

}
