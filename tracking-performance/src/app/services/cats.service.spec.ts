import { TestBed } from '@angular/core/testing';

import { CatsService } from './cats.service';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
