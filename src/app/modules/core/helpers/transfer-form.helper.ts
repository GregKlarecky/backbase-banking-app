import { QuestionBase } from '../../peachtree-form/helpers/question-base.helper';
import { ControlType } from 'src/app/enums/control-type.enum';
import { InputType } from 'src/app/enums/input-type.enum';

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
    type: InputType.Text
  }),
  new QuestionBase({
    controlType: ControlType.Currency,
    key: 'ammount',
    label: 'Ammount',
    type: InputType.Text
  })
];
