import { TestBed } from '@angular/core/testing';

import { YloginService } from './ylogin.service';

describe('YloginService', () => {
  let service: YloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
