import { TestBed } from '@angular/core/testing';

import { DadoDataService } from './dado-data.service';

describe('DadoDataService', () => {
  let service: DadoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
