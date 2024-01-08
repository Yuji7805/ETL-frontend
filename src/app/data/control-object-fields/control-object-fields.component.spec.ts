import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlObjectFieldsComponent } from './control-object-fields.component';

describe('ControlObjectFieldsComponent', () => {
  let component: ControlObjectFieldsComponent;
  let fixture: ComponentFixture<ControlObjectFieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlObjectFieldsComponent]
    });
    fixture = TestBed.createComponent(ControlObjectFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
