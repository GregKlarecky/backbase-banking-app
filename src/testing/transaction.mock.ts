import { TransactionType } from 'src/app/enums/transaction-type.enum';

export const transactionMock = {
  categoryCode: '#345678',
  date: 12345678,
  merchantName: 'Tester 3',
  type: TransactionType.Salaries,
  amount: 1234,
  currencyCode: 'EUR'
};
