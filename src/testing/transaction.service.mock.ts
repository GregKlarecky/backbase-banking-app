import { of } from 'rxjs';
import { TransactionService } from 'src/app/modules/transaction/services/transaction/transaction.service';

export const transactionServiceMock: Partial<TransactionService> = {
  getTransactions() {
    return of([]);
  }
};
