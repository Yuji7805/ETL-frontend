import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlObjectUpsertComponent } from './control-object-upsert.component';

describe('ControlObjectCreateComponent', () => {
  let component: ControlObjectUpsertComponent;
  let fixture: ComponentFixture<ControlObjectUpsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlObjectUpsertComponent]
    });
    fixture = TestBed.createComponent(ControlObjectUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
