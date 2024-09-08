import { TestBed } from '@angular/core/testing';

import { VelibService } from './velib.service';

describe('VelibService', () => {
  let service: VelibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VelibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
