import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.isLogin = this.router.url === '/login';
  }

  logout() {
    // call logout service
    console.log('user logged out... ');
  }
}
