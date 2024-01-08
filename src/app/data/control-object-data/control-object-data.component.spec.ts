import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlObjectDataComponent } from './control-object-data.component';

describe('ControlObjectDataComponent', () => {
  let component: ControlObjectDataComponent;
  let fixture: ComponentFixture<ControlObjectDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlObjectDataComponent]
    });
    fixture = TestBed.createComponent(ControlObjectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
