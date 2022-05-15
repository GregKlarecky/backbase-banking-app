import { Component } from '@angular/core';
import { transferFormQuestions } from '../../helpers/transfer-form.helper';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {
  transferFormQuestions = transferFormQuestions;
}
