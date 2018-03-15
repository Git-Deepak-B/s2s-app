import { Component, OnInit } from '@angular/core';
import { NAVITEMS } from '../../../assets/data/nav-items';
import {Router} from '@angular/router';
import {NavItem} from '../../../assets/data/nav-item';


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  navItems = NAVITEMS;
  isLogin;
  selectedItem;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.isLogin = this.router.url === '/login';
    this.setDefaultItem();
  }

  navClick(newItem) {
    this.selectedItem = newItem;
  }

  setDefaultItem() {
    this.selectedItem = this.navItems.find(function (navItem) {
      return navItem.href === window.location.pathname;
    });
  }
}
