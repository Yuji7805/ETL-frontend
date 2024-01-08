import { TestBed } from '@angular/core/testing';

import { DataboxesService } from './databoxes.service';

describe('DataboxesService', () => {
  let service: DataboxesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataboxesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
