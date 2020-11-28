import { TestBed } from '@angular/core/testing';

import { ManagementGuardService } from './management-guard.service';

describe('ManagementGuardService', () => {
  let service: ManagementGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
