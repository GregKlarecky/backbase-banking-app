import { Component, OnInit } from '@angular/core';
import { TransferFormService } from '../../services/transfer-form/transfer-form.service';
import { QuestionBase } from 'src/app/modules/peachtree-form/helpers/question-base.helper';
import { StateService } from '../../services/state/state.service';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReviewComponent } from '../review/review.component';
import { TransferFormValue } from 'src/app/interfaces/transfer-form-value.interface';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  transferFormQuestions: QuestionBase<any>[];
  private subscriptions: SubSink = new SubSink();
  constructor(
    private stateService: StateService,
    private transferForm: TransferFormService,
    private ngbModal: NgbModal
  ) {}
  ngOnInit(): void {
    this.buildFormOnBalanceChange();
  }

  buildFormOnBalanceChange() {
    this.subscriptions.sink = this.stateService.balance$
      .pipe(
        distinctUntilChanged(),
        tap(balance => {
          const accountName =
            this.stateService.accountName$.value + `: ${balance} €`;
          this.transferFormQuestions = this.transferForm.getQuestions(
            accountName
          );
        })
      )
      .subscribe();
  }

  openReview(formValue: TransferFormValue) {
    const reference = this.ngbModal.open(ReviewComponent);
    reference.componentInstance.options = formValue;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
