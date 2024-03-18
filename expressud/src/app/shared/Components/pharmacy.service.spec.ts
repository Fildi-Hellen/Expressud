import { TestBed } from '@angular/core/testing';

import { PharmacyService } from '../../Services/pharmacy.service';

describe('PharmacyService', () => {
  let service: PharmacyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
