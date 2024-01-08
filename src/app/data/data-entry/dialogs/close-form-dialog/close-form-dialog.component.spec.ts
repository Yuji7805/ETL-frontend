import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseFormDialogComponent } from './close-form-dialog.component';

describe('CloseFormDialogComponent', () => {
  let component: CloseFormDialogComponent;
  let fixture: ComponentFixture<CloseFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloseFormDialogComponent]
    });
    fixture = TestBed.createComponent(CloseFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
