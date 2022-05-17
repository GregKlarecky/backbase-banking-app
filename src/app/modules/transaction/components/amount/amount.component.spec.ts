import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockPipe } from 'ng-mocks';
import { transactionMock } from 'src/testing/transaction.mock';
import { CountableNumber } from '../../pipes/countable-number/countable-number.pipe';
import { PeachtreeCurrencyPipe } from '../../pipes/peachtree-currency/peachtree-currency.pipe';

import { AmountComponent } from './amount.component';

describe('AmountComponent', () => {
  let component: AmountComponent;
  let fixture: ComponentFixture<AmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AmountComponent,
        MockPipe(CountableNumber),
        MockPipe(PeachtreeCurrencyPipe)
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountComponent);
    component = fixture.componentInstance;
    component.transaction = transactionMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
