import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EditCustomerDataService {
  // Observable sources
  private updateCustomerSource = new Subject<any>();
  private resetPasswordSource = new Subject<any>();

  updateCustomer = this.updateCustomerSource.asObservable();
  resetPasswordCustomer = this.resetPasswordSource.asObservable();

  constructor() { }

  onResetPasswordClicked(customer) {
    console.log('inside onResetPasswordClicked')
    this.resetPasswordSource.next(customer);
  }

  onUpdateCustomerClicked(customer) {
    console.log('inside onUpdateCustomerClicked')
    this.updateCustomerSource.next(customer);
  }

}
