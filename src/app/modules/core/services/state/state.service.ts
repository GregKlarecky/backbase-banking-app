import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { INITIAL_BALANCE, ACCOUNT_NAME } from 'src/app/consts/state.consts';
import { TransactionFacade } from 'src/app/modules/transaction/helpers/transaction.facade';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  balance$: BehaviorSubject<number> = new BehaviorSubject(INITIAL_BALANCE);
  accountName$: BehaviorSubject<string> = new BehaviorSubject(ACCOUNT_NAME);
  transfer$: Subject<TransactionFacade> = new Subject();
  constructor() {}
}
