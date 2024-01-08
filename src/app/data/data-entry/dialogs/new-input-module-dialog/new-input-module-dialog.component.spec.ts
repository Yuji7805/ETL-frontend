import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInputModuleDialogComponent } from './new-input-module-dialog.component';

describe('NewInputModuleDialogComponent', () => {
  let component: NewInputModuleDialogComponent;
  let fixture: ComponentFixture<NewInputModuleDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewInputModuleDialogComponent]
    });
    fixture = TestBed.createComponent(NewInputModuleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
