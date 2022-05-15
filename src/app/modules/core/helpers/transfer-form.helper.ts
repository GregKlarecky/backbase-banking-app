import { QuestionBase } from '../../peachtree-form/helpers/question-base.helper';
import { ControlType } from 'src/app/enums/control-type.enum';
import { InputType } from 'src/app/enums/input-type.enum';
import { Validators } from '@angular/forms';
import { NegativeNumber } from '../../peachtree-form/validators/negative-number.validator';
import { NumberValidator } from '../../peachtree-form/validators/number.validator';

export const transferFormQuestions = [
  new QuestionBase({
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
    validators: [Validators.required, NumberValidator, NegativeNumber]
  })
];
