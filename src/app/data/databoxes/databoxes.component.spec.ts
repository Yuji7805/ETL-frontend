import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataboxesComponent } from './databoxes.component';

describe('DataboxesComponent', () => {
  let component: DataboxesComponent;
  let fixture: ComponentFixture<DataboxesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataboxesComponent]
    });
    fixture = TestBed.createComponent(DataboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
