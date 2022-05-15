import { Injectable } from '@angular/core';
import { QuestionBase } from 'src/app/modules/peachtree-form/helpers/question-base.helper';
import { ControlType } from 'src/app/enums/control-type.enum';
import { InputType } from 'src/app/enums/input-type.enum';
import { Validators } from '@angular/forms';
import { NumberValidator } from 'src/app/modules/peachtree-form/validators/number.validator';
import { NegativeNumber } from 'src/app/modules/peachtree-form/validators/negative-number.validator';
import { BalanceValidator } from 'src/app/modules/peachtree-form/services/balance-validator/balance-validator.service';
import { DecimalNumber } from 'src/app/modules/peachtree-form/validators/decimal-number.validator';

@Injectable({
  providedIn: 'root'
})
export class TransferFormService {
  constructor(private balanceValidator: BalanceValidator) {}

  getQuestions(accountName: string): QuestionBase<any>[] {
    return [
      new QuestionBase({
        value: accountName,
        controlType: ControlType.Text,
        key: 'fromAccount',
        label: 'From Account',
        type: InputType.Text,
        options: { disabled: true }
      }),
      new QuestionBase({
        controlType: ControlType.Text,
        key: 'toAccount',
        label: 'To Account',
        type: InputType.Text,
        validators: [Validators.required]
      }),
      new QuestionBase({
        controlType: ControlType.Currency,
        key: 'ammount',
        label: 'Ammount',
        type: InputType.Text,
        validators: [
          Validators.required,
          NumberValidator,
          NegativeNumber,
          DecimalNumber
        ],
        asyncValidators: [
          this.balanceValidator.validate.bind(this.balanceValidator)
        ]
      })
    ];
  }
}
