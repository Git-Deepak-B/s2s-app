import { Component, OnInit } from '@angular/core';
import { NAVITEMS } from '../../../assets/data/nav-items';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  navItems = NAVITEMS;
  isLogin;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.isLogin = this.router.url === '/login';
  }
}
