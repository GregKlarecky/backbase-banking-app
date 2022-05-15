import { Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { of, Observable } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import { StateService } from 'src/app/modules/core/services/state/state.service';

@Injectable({
  providedIn: 'root'
})
export class BalanceValidator implements AsyncValidator {
  private maxAmountAllowedOverBalance = 500;
  constructor(private stateService: StateService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.stateService.balance$.pipe(
      take(1),
      map(balance =>
        this.isAmountOverAllowedBalance(balance, control.value)
          ? { ammountOverAllowedBalance: 'There is not enough balance.' }
          : null
      ),
      catchError(() => of(null))
    );
  }

  private isAmountOverAllowedBalance(
    balance: number,
    ammount: number
  ): boolean {
    return balance + this.maxAmountAllowedOverBalance < +ammount;
  }
}
