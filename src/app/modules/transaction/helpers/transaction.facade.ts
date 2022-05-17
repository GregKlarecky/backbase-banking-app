import { Transaction } from 'src/app/interfaces/transaction.interface';
import { TransactionType } from 'src/app/enums/transaction-type.enum';

export class TransactionFacade {
  categoryCode: string;
  date: number;
  merchantName: string;
  type: TransactionType;
  amount: number;
  currencyCode: string;
  constructor(transaction: Transaction) {
    this.categoryCode = transaction.categoryCode;
    this.date = TransactionFacade.transformValueDateToNumber(
      transaction.dates.valueDate
    );
    this.merchantName = transaction.merchant.name;
    this.amount = transaction.transaction.amountCurrency.amount;
    this.type = transaction.transaction.type;
    this.currencyCode = transaction.transaction.amountCurrency.currencyCode;
  }

  static transformValueDateToNumber(valueDate: number | string): number {
    const isNumber = !isNaN(<number>valueDate);
    if (isNumber) {
      return <number>valueDate;
    }
    const date = new Date(valueDate);
    return date.getTime();
  }
}
