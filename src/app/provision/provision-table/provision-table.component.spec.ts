import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionTableComponent } from './provision-table.component';

describe('ProvisionTableComponent', () => {
  let component: ProvisionTableComponent;
  let fixture: ComponentFixture<ProvisionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
