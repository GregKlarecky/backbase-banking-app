import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockProvider } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { FilterComponent } from 'src/app/modules/bb-ui/components/filter/filter.component';
import { StateService } from 'src/app/modules/core/services/state/state.service';
import { stateMock } from 'src/testing/state.service.mock';
import { transactionServiceMock } from 'src/testing/transaction.service.mock';
import { TransactionService } from '../../services/transaction/transaction.service';

import { TransactionListComponent } from './transaction-list.component';

describe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionListComponent, MockComponent(FilterComponent)],
      providers: [
        mockProvider(StateService, stateMock),
        mockProvider(TransactionService, transactionServiceMock)
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
