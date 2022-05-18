import { BehaviorSubject, Subject } from 'rxjs';

export const stateMock = {
  balance$: new Subject(),
  transfer$: new Subject(),
  accountName$: new BehaviorSubject('Test Account Name'),
};
