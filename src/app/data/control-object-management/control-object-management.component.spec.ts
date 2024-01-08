import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlObjectManagementComponent } from './control-object-management.component';

describe('ControlObjectManagementComponent', () => {
  let component: ControlObjectManagementComponent;
  let fixture: ComponentFixture<ControlObjectManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlObjectManagementComponent]
    });
    fixture = TestBed.createComponent(ControlObjectManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
