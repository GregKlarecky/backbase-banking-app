import { Component, OnInit } from '@angular/core';
import { TransferFormService } from '../../services/transfer-form/transfer-form.service';
import { QuestionBase } from 'src/app/modules/peachtree-form/helpers/question-base.helper';
import { StateService } from '../../services/state/state.service';
import { distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  transferFormQuestions: QuestionBase<any>[];
  constructor(
    private stateService: StateService,
    private transferForm: TransferFormService
  ) {}
  ngOnInit(): void {
    this.buildFormOnBalanceChange();
  }

  buildFormOnBalanceChange() {
    this.stateService.balance$
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
}
