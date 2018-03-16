import {Component, OnInit} from '@angular/core';
import {NAVITEMS} from '../../../assets/data/nav-items';
import {User} from '../../common/types/User';
import {UserStoreService} from '../../stores/user-store.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})

export class NavigatorComponent implements OnInit {
  navItems = NAVITEMS;
  user: User;

  constructor(private _userStore: UserStoreService) {
  }

  ngOnInit() {
    this._userStore.getUser().subscribe(user => this.user = user);
  }

}
