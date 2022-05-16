import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TransferFormValue } from 'src/app/interfaces/transfer-form-value.interface';
import { StateService } from '../../services/state/state.service';
import { TransactionFacade } from 'src/app/modules/transaction/helpers/transaction.facade';
import { TransactionType } from 'src/app/enums/transaction-type.enum';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() options: TransferFormValue;
  constructor(
    private stateService: StateService,
    public activeModal: NgbActiveModal
  ) {}

  onSubmitForm(): void {
    this.changeBalance();
    this.makeTransfer();
    this.activeModal.close();
  }

  changeBalance() {
    const balance =
      Math.round(
        this.stateService.balance$.value * 100 - +this.options.amount * 100
      ) / 100;
    this.stateService.balance$.next(balance);
  }

  makeTransfer() {
    const transaction: TransactionFacade = {
      categoryCode: '34543543',
      date: new Date().getTime(),
      merchantName: this.options.toAccount,
      type: TransactionType.Transaction,
      amount: +this.options.amount,
      currencyCode: 'EUR'
    };
    this.stateService.transfer$.next(transaction);
  }
}
