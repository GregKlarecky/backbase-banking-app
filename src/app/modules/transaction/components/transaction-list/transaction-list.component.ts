import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { TransactionService } from '../../services/transaction/transaction.service';
import { TransactionFacade } from '../../helpers/transaction.facade';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transactions: TransactionFacade[];
  constructor(private transactionService: TransactionService) {}
  ngOnInit() {
    this.initTransactions();
  }

  initTransactions() {
    this.transactionService
      .getTransactions()
      .pipe(
        take(1),
        tap((transactions: TransactionFacade[]) => {
          this.transactions = transactions;
        })
      )
      .subscribe();
  }
}
