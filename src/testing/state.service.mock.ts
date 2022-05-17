import { Subject } from 'rxjs';

export const stateMock = {
  balance$: new Subject(),
  transfer$: new Subject()
};
