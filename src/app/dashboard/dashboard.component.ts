import {Component, OnInit} from '@angular/core';
import {UserStoreService} from '../stores/user-store.service';
import {DashStatusService} from '../services/dash-status.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user;
  dashStatus;

  constructor(private _userStore: UserStoreService,
              private _dashService: DashStatusService) {
  }

  ngOnInit() {
    this._dashService.getDashStatus().subscribe(resp => {
      console.log(resp);
      this.dashStatus = resp;
    });
    this._userStore.getUser().subscribe(user => this.user = user);
  }

}
