import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { TransactionService } from '../../services/transaction/transaction.service';
import { TransactionFacade } from '../../helpers/transaction.facade';
import { StateService } from 'src/app/modules/core/services/state/state.service';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: TransactionFacade[];
  private initialTransactions: TransactionFacade[];
  private searchValue: string;
  private subscriptions: SubSink = new SubSink();

  constructor(
    private stateService: StateService,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.initTransactions();
    this.onNewTransfer();
  }

  initTransactions(): void {
    this.subscriptions.sink = this.transactionService
      .getTransactions()
      .pipe(
        take(1),
        tap((transactions: TransactionFacade[]) => {
          this.initialTransactions = transactions;
          this.transactions = transactions;
          this.sort();
        })
      )
      .subscribe();
  }

  onSearch(value: string): void {
    this.searchValue = value;
    this.filter();
    this.sort();
  }

  onNewTransfer(): void {
    this.subscriptions.sink = this.stateService.transfer$
      .pipe(
        tap(newTransaction => {
          this.initialTransactions = [
            ...this.initialTransactions,
            newTransaction
          ];
          this.filter();
          this.sort();
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

  sort() {
    this.transactions.sort((a, b) => b.date - a.date);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
