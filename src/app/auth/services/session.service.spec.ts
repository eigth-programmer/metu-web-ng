import { TestBed } from '@angular/core/testing';

import { SessionWebService } from './session-web.service';

describe('SessionService', () => {
  let service: SessionWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
