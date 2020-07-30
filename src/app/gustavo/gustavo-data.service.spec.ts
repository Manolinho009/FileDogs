import { TestBed } from '@angular/core/testing';

import { GustavoDataService } from './gustavo-data.service';

describe('GustavoDataService', () => {
  let service: GustavoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GustavoDataService);
  });

  it('should be created', () => {
    const service: GustavoDataService = TestBed.get(GustavoDataService);
    expect(service).toBeTruthy();
  });
});
