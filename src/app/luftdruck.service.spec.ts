import { TestBed } from '@angular/core/testing';

import { LuftdruckService } from './luftdruck.service';

describe('LuftdruckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LuftdruckService = TestBed.get(LuftdruckService);
    expect(service).toBeTruthy();
  });
});
