import { TestBed } from '@angular/core/testing';

import { AnotherUnusedService } from './another-unused.service';

describe('AnotherUnusedService', () => {
  let service: AnotherUnusedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotherUnusedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
