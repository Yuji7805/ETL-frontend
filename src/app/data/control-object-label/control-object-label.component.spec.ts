import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlObjectLabelComponent } from './control-object-label.component';

describe('ControlObjectLabelComponent', () => {
  let component: ControlObjectLabelComponent;
  let fixture: ComponentFixture<ControlObjectLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlObjectLabelComponent]
    });
    fixture = TestBed.createComponent(ControlObjectLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
