import { TestBed } from '@angular/core/testing';

import { UnusedService } from './unused.service';

describe('UnusedService', () => {
  let service: UnusedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnusedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
