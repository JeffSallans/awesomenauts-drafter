import { TestBed } from '@angular/core/testing';

import { NautDataService } from './naut-data.service';

describe('NautDataService', () => {
  let service: NautDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NautDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
