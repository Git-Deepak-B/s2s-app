import {Component, OnInit} from '@angular/core';
import {User} from '../../common/types/User';
import {UserStoreService} from '../../stores/user-store.service';
import {AuthorizationService} from '../../services/authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private _userStore: UserStoreService,
              private _authService: AuthorizationService,
              private _router: Router) {

  }

  ngOnInit() {
    this._userStore.getUser().subscribe(user => this.user = user);
  }

  logout() {
    // call logout service
    console.log('user logged out... ');
    this._authService.logout();
    // this._router.navigate(['/login']);

  }
}
