import { TestBed } from '@angular/core/testing';

import { ElementdataService } from './elementdata.service';

describe('ElementdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementdataService = TestBed.get(ElementdataService);
    expect(service).toBeTruthy();
  });
});
