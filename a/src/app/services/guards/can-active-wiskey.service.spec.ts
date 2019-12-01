import { TestBed } from '@angular/core/testing';

import { CanActiveWiskeyService } from './can-active-wiskey.service';

describe('CanActiveWiskeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActiveWiskeyService = TestBed.get(CanActiveWiskeyService);
    expect(service).toBeTruthy();
  });
});
