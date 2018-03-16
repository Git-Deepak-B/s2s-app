import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalDirective} from 'angular-bootstrap-md/modals/modal.directive';

@Component({
  selector: '[app-customer-list-item]',
  templateUrl: './customer-list-item.component.html',
  styleUrls: ['./customer-list-item.component.scss']
})
export class CustomerListItemComponent implements OnInit {
  @ViewChild('resetPasswordModal') public resetPasswordModal: ModalDirective;
  @ViewChild('updateCustomerModal') public updateCustomerModal: ModalDirective;
  @Input('customer')
  customer;

  constructor() {
  }

  ngOnInit() {
  }

  updateCustomerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  });

  get username() {
    return this.updateCustomerForm.get('username');
  }

  get company() {
    return this.updateCustomerForm.get('company');
  }

  get firstName() {
    return this.updateCustomerForm.get('firstName');
  }

  get lastName() {
    return this.updateCustomerForm.get('lastName');
  }

  get email() {
    return this.updateCustomerForm.get('email');
  }

  updateCustomer(updateCustomerForm) {
    // TODO debug why all values are coming as empty
    // TODO show success message once update is complete
    console.log(updateCustomerForm);
  }

  resetPassword(customer) {
    console.log(customer.username);
    this.resetPasswordModal.show();
  }
}
