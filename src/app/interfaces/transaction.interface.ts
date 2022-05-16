import { Dates } from './dates.interface';
import { Merchant } from './merchant.interface';
import { TransactionDetails } from './transaction-details.interface';

export interface Transaction {
  categoryCode: string;
  dates: Dates;
  merchant: Merchant;
  transaction: TransactionDetails;
}
