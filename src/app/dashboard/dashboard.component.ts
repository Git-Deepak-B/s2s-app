import {Component, OnInit} from '@angular/core';
import {UserStoreService} from '../stores/user-store.service';
import {MockUsers} from '../../assets/data/mock-user';
import {DashStatusService} from '../services/dash-status.service';
import {DashStatus} from '../common/types/DashStatus';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashStatus;

  constructor(private _userStore: UserStoreService,
              private _dashService: DashStatusService) {
  }

  ngOnInit() {
    this._dashService.getDashStatus().subscribe(resp => {
      console.log(resp);
      this.dashStatus = resp;
    });
  }

}
