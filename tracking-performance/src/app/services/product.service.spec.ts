import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  function setup() {
    const service = new ProductService();
    return {
      service
    };
  }

  it('should be created', () => {
    const { service } = setup();
    
    expect(service).toBeTruthy();
  });
});
