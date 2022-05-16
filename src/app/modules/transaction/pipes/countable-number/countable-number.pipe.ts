import { Pipe, PipeTransform } from '@angular/core';
import { TransactionType } from 'src/app/enums/transaction-type.enum';
import { TransactionFacade } from '../../helpers/transaction.facade';

@Pipe({
  name: 'countableNumber'
})
export class CountableNumber implements PipeTransform {
  transform(transaction: TransactionFacade): number {
    switch (transaction.type) {
      case TransactionType.Salaries:
        return +transaction.amount;
      default:
        return -transaction.amount;
    }
  }
}
