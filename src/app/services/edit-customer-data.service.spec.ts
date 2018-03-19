import { TestBed, inject } from '@angular/core/testing';

import { EditCustomerDataService } from './edit-customer-data.service';

describe('EditCustomerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditCustomerDataService]
    });
  });

  it('should be created', inject([EditCustomerDataService], (service: EditCustomerDataService) => {
    expect(service).toBeTruthy();
  }));
});
