import { Component, OnInit } from '@angular/core';
import { take, tap, startWith } from 'rxjs/operators';
import { TransactionService } from '../../services/transaction/transaction.service';
import { TransactionFacade } from '../../helpers/transaction.facade';
import { combineLatest, BehaviorSubject } from 'rxjs';
import { StateService } from 'src/app/modules/core/services/state/state.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  initialTransactions: TransactionFacade[];
  transactions: TransactionFacade[];
  searchValue: string;

  constructor(
    private stateService: StateService,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.initTransactions();
    this.onNewTransfer();
  }

  initTransactions(): void {
    this.transactionService
      .getTransactions()
      .pipe(
        take(1),
        tap((transactions: TransactionFacade[]) => {
          this.initialTransactions = transactions;
          this.transactions = transactions;
        })
      )
      .subscribe();
  }

  onSearch(value: string): void {
    this.searchValue = value;
    this.filter();
  }

  onNewTransfer(): void {
    this.stateService.transfer$
      .pipe(
        tap(newTransaction => {
          this.initialTransactions = [
            ...this.initialTransactions,
            newTransaction
          ];
          this.filter();
        })
      )
      .subscribe();
  }

  filter() {
    this.transactions = this.initialTransactions.filter(transaction => {
      const lowerCaseMerchantName = transaction.merchantName.toLocaleLowerCase();
      const lowerCasedSearchValue = this.searchValue.toLocaleLowerCase();
      return lowerCaseMerchantName.includes(lowerCasedSearchValue);
    });
  }
}
