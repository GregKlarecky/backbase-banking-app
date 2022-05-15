import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  balance$: BehaviorSubject<number> = new BehaviorSubject(5000);
  constructor() {}
}
