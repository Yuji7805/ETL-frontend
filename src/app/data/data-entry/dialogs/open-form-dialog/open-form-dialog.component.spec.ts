import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFormDialogComponent } from './open-form-dialog.component';

describe('OpenFormDialogComponent', () => {
  let component: OpenFormDialogComponent;
  let fixture: ComponentFixture<OpenFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenFormDialogComponent]
    });
    fixture = TestBed.createComponent(OpenFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
