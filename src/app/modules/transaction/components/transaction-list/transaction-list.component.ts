import { Component, OnInit } from '@angular/core';
import { take, tap, startWith } from 'rxjs/operators';
import { TransactionService } from '../../services/transaction/transaction.service';
import { TransactionFacade } from '../../helpers/transaction.facade';
import { Subject, combineLatest } from 'rxjs';
import { StateService } from 'src/app/modules/core/services/state/state.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  initialTransactions: TransactionFacade[];
  transactions: TransactionFacade[];
  searchValue: Subject<string> = new Subject();

  constructor(
    private stateService: StateService,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.initTransactions();
    this.onListChanges();
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
    this.searchValue.next(value);
  }

  onListChanges(): void {
    combineLatest(
      this.searchValue,
      this.stateService.transfer$.pipe(startWith(null))
    )
      .pipe(
        tap(([searchValue, newTransaction]) => {
          const listWithNewTransaction = newTransaction
            ? [...this.initialTransactions, newTransaction]
            : this.initialTransactions;
          this.transactions = listWithNewTransaction.filter(transaction => {
            const lowerCaseMerchantName = transaction.merchantName.toLocaleLowerCase();
            const lowerCasedSearchValue = searchValue.toLocaleLowerCase();
            return lowerCaseMerchantName.includes(lowerCasedSearchValue);
          });
        })
      )
      .subscribe();
  }
}
