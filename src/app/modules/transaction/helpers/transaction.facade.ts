import { Transaction } from 'src/app/interfaces/transaction.interface';
import { Merchant } from 'src/app/interfaces/merchant.interface';
import { TransactionType } from 'src/app/enums/transaction-type.enum';

export class TransactionFacade {
  categoryCode: string;
  date: number;
  merchant: Merchant;
  type: TransactionType;
  amount: number;
  currencyCode: string;
  constructor(transaction: Transaction) {
    this.categoryCode = transaction.categoryCode;
    this.date = transaction.dates.valueDate;
    this.merchant = transaction.merchant;
    this.amount = transaction.transaction.amountCurrency.amount;
    this.type = transaction.transaction.type;
    this.currencyCode = transaction.transaction.amountCurrency.currencyCode;
  }
}
