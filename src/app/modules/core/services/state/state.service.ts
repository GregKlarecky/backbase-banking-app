import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INITIAL_BALANCE, ACCOUNT_NAME } from 'src/app/consts/state.consts';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  balance$: BehaviorSubject<number> = new BehaviorSubject(INITIAL_BALANCE);
  accountName$: BehaviorSubject<string> = new BehaviorSubject(ACCOUNT_NAME);
  constructor() {}
}
