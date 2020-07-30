import { TestBed } from '@angular/core/testing';

import { GustavoService } from './gustavo.service';

describe('GustavoService', () => {
  let service: GustavoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GustavoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
