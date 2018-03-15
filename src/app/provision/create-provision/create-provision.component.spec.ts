import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProvisionComponent } from './create-provision.component';

describe('CreateProvisionComponent', () => {
  let component: CreateProvisionComponent;
  let fixture: ComponentFixture<CreateProvisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProvisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
