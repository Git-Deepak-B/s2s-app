import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionListItemComponent } from './provision-list-item.component';

describe('ProvisionListItemComponent', () => {
  let component: ProvisionListItemComponent;
  let fixture: ComponentFixture<ProvisionListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
