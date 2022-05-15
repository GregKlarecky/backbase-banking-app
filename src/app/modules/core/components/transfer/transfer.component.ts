import { Component, OnInit } from '@angular/core';
import { TransferFormService } from '../../services/transfer-form/transfer-form.service';
import { QuestionBase } from 'src/app/modules/peachtree-form/helpers/question-base.helper';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  transferFormQuestions: QuestionBase<any>[];
  constructor(private transferForm: TransferFormService) {}
  ngOnInit(): void {
    this.transferFormQuestions = this.transferForm.getQuestions();
  }
}
