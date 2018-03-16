import {Component, OnInit} from '@angular/core';
import {UserStoreService} from '../stores/user-store.service';
import {MockUsers} from '../../assets/data/mock-user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
