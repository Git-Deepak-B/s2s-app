import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin;

  constructor() {

  }

  ngOnInit() {
    this.isLogin =  window.location.pathname === '/login';
  }

  logout() {
    // call logout service
    console.log('user logged out... ');
  }
}
