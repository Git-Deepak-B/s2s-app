import { Component, OnInit } from '@angular/core';
import { NAVITEMS } from '../../../assets/data/nav-items';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})

export class NavigatorComponent implements OnInit {
  navItems = NAVITEMS;
  isLogin;
  selectedItem;

  constructor() {
  }

  ngOnInit() {
    this.isLogin =  window.location.pathname === '/login';

    // set default nav item to be active when page is refreshed
    this.selectedItem = this.navItems.find(function (navItem) {
      return navItem.href === window.location.pathname;
    });
  }

  navClick(newItem) {
    this.selectedItem = newItem;
  }
}
