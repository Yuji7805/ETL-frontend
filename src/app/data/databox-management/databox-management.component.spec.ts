import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataboxManagementComponent } from './databox-management.component';

describe('DataboxManagementComponent', () => {
  let component: DataboxManagementComponent;
  let fixture: ComponentFixture<DataboxManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataboxManagementComponent]
    });
    fixture = TestBed.createComponent(DataboxManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
