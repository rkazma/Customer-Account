import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoTableComponent } from './customer-info-table.component';

describe('CustomerInfoTableComponent', () => {
  let component: CustomerInfoTableComponent;
  let fixture: ComponentFixture<CustomerInfoTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerInfoTableComponent]
    });
    fixture = TestBed.createComponent(CustomerInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
