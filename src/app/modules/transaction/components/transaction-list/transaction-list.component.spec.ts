import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockProvider } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';
import { FilterComponent } from 'src/app/modules/bb-ui/components/filter/filter.component';
import { TransactionItemComponent } from 'src/app/modules/bb-ui/components/transaction-item/transaction-item.component';
import { StateService } from 'src/app/modules/core/services/state/state.service';
import { newTransaction } from 'src/testing/new-transaction.mock';
import { stateMock } from 'src/testing/state.service.mock';
import { transactionMock } from 'src/testing/transaction.mock';
import { transactionsMock } from 'src/testing/transactions.mock';
import { TransactionService } from '../../services/transaction/transaction.service';
import { AmountComponent } from '../amount/amount.component';

import { TransactionListComponent } from './transaction-list.component';

describe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;
  let transactionServiceMock: TransactionService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TransactionListComponent,
        MockComponent(TransactionItemComponent),
        MockComponent(AmountComponent),
        MockComponent(FilterComponent),
      ],
      providers: [
        mockProvider(StateService, stateMock),
        mockProvider(TransactionService),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
    transactionServiceMock = TestBed.inject(TransactionService);
    (<jasmine.Spy>transactionServiceMock.getTransactions).and.returnValue(
      of(transactionsMock)
    );
  });

  it('should call initTransactions and onNewTransfer', () => {
    const initTransactionsSpy = spyOn(component, 'initTransactions');
    const onNewTransferSpy = spyOn(component, 'onNewTransfer');
    fixture.detectChanges();

    expect(initTransactionsSpy).toHaveBeenCalled();
    expect(onNewTransferSpy).toHaveBeenCalled();
  });

  it('should assign value to transactions on initTransaction call', () => {
    const sortSpy = spyOn(component, 'sort');
    component.initTransactions();
    // @ts-ignore
    expect(component.initialTransactions).toEqual(transactionsMock);
    expect(component.transactions).toEqual(transactionsMock);
    expect(sortSpy).toHaveBeenCalled();
  });

  it('should add new transfer on onNewTransfer call', () => {
    const sortSpy = spyOn(component, 'sort');
    const filterSpy = spyOn(component, 'filter');
    const stateMock = TestBed.inject(StateService);
    // @ts-ignore
    component.initialTransactions = transactionsMock;
    // @ts-ignore
    expect(component.initialTransactions.length).toBe(1);

    component.onNewTransfer();
    stateMock.transfer$.next(transactionMock);

    // @ts-ignore
    expect(component.initialTransactions.length).toBe(2);
    expect(sortSpy).toHaveBeenCalled();
    expect(filterSpy).toHaveBeenCalled();
  });

  it('should filter transactions by Name', () => {
    // @ts-ignore
    component.initialTransactions = [...transactionsMock, newTransaction];
    // @ts-ignore
    component.searchValue = 'Some different name';
    component.filter();
    expect(component.transactions.length).toBe(1);
    expect(component.transactions[0].merchantName).toBe('Some different name');
  });
});
