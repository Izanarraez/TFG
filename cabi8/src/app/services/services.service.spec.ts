import { TestBed } from '@angular/core/testing';

import { servicescriptService } from './services.service';

describe('ServicesService', () => {
  let service: servicescriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(servicescriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
