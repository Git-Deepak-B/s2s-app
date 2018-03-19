import {Component, Input, OnInit} from '@angular/core';
import {EditCustomerDataService} from '../../services/edit-customer-data.service';

@Component({
  selector: '[app-customer-list-item]',
  templateUrl: './customer-list-item.component.html',
  styleUrls: ['./customer-list-item.component.scss']
})
export class CustomerListItemComponent implements OnInit {
  @Input('customer')
  customer;

  constructor(private _editCustomerService: EditCustomerDataService) {
  }

  ngOnInit() {
  }

  resetPassword(customer) {
    this._editCustomerService.onResetPasswordClicked(customer);
  }

  updateCustomer(customer) {
    this._editCustomerService.onUpdateCustomerClicked(customer);
  }
}
