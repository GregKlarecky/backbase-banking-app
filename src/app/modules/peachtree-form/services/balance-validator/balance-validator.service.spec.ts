import { TestBed } from '@angular/core/testing';

import { BalanceValidator } from './balance-validator.service';

describe('BalanceValidator', () => {
  let service: BalanceValidator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceValidator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
