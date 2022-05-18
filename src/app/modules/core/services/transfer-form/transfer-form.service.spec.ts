import { TestBed } from '@angular/core/testing';

import { TransferFormService } from './transfer-form.service';

describe('TransferFormService', () => {
  let service: TransferFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferFormService);
  });

  it(`should set fromAccount input value to 'Super Testing Account'`, () => {
    const formConfig = service.getQuestions('Super Testing Account');
    const config = formConfig.find((config) => config.key === 'fromAccount');
    expect(config?.value).toBe('Super Testing Account');
  });

  it(`should retun 3 input configs`, () => {
    const formConfig = service.getQuestions('Super Testing Account');
    expect(Array.isArray(formConfig)).toBeTruthy();
    expect(formConfig.length).toBe(3);
  });
});
