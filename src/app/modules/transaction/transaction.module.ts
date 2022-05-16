import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { BbUIModule } from '../bb-ui/bb-ui.module';
import { AmountComponent } from './components/amount/amount.component';
import { CountableNumber } from './pipes/countable-number/countable-number.pipe';
import { PeachtreeCurrencyPipe } from './pipes/peachtree-currency/peachtree-currency.pipe';

@NgModule({
  declarations: [TransactionListComponent, AmountComponent, CountableNumber, PeachtreeCurrencyPipe],
  imports: [CommonModule, BbUIModule],
  exports: [TransactionListComponent]
})
export class TransactionModule {}
