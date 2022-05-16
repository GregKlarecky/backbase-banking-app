import { Amount } from './amount.interface';
import { TransactionType } from '../enums/transaction-type.enum';

export interface TransactionDetails {
  amountCurrency: Amount;
  creditDebitIndicator: string;
  type: TransactionType;
}
