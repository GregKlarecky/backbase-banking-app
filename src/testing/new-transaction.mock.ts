import { TransactionType } from 'src/app/enums/transaction-type.enum';

export const newTransaction = {
  categoryCode: '#3456789',
  date: 123456,
  merchantName: 'Some different name',
  type: TransactionType.Transaction,
  amount: 234,
  currencyCode: 'EUR',
};
