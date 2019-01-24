import { TestBed } from '@angular/core/testing';

import { DataelementService } from './dataelement.service';

describe('DataelementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataelementService = TestBed.get(DataelementService);
    expect(service).toBeTruthy();
  });
});
