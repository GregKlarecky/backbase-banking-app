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
    const balance = this.stateService.balance$.value - +this.options.amount;
    this.stateService.balance$.next(balance);
  }
}