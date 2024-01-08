import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormDialogComponent } from './new-form-dialog.component';

describe('NewFormDialogComponent', () => {
  let component: NewFormDialogComponent;
  let fixture: ComponentFixture<NewFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFormDialogComponent]
    });
    fixture = TestBed.createComponent(NewFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
