import { TransactionType } from 'src/app/enums/transaction-type.enum';

export const transactionsMock = [
  {
    categoryCode: '#3456789',
    date: 123456,
    merchantName: 'Some merchant name',
    type: TransactionType.Transaction,
    amount: 125,
    currencyCode: 'EUR',
  },
];
