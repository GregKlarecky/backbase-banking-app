import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TransferFormValue } from 'src/app/interfaces/transfer-form-value.interface';
import { StateService } from '../../services/state/state.service';

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

  makeTransfer(): void {
    this.changeBalance();
    this.activeModal.close();
  }

  changeBalance() {
    const balance =
      Math.round(
        this.stateService.balance$.value * 100 - +this.options.amount * 100
      ) / 100;
    this.stateService.balance$.next(balance);
  }
}
