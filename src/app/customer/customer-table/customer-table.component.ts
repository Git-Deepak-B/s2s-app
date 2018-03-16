import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {
  dtOptions;
  customers;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.dtOptions = {
      'bLengthChange': false,
      'bSort': false,
      'bInfo': false
    };

    this._userService.getAllUsers('customer').subscribe(data => {
      this.customers = data;
      this.dtTrigger.next(data);
    });
  }

}
