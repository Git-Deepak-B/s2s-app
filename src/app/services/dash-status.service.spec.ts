import { TestBed, inject } from '@angular/core/testing';

import { DashStatusService } from './dash-status.service';

describe('DashStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashStatusService]
    });
  });

  it('should be created', inject([DashStatusService], (service: DashStatusService) => {
    expect(service).toBeTruthy();
  }));
});
