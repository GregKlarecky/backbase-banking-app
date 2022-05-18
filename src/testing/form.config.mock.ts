import { Validators } from '@angular/forms';
import { ControlType } from 'src/app/enums/control-type.enum';
import { InputType } from 'src/app/enums/input-type.enum';
import { QuestionBase } from 'src/app/modules/peachtree-form/helpers/question-base.helper';

export const formConfigMock = [
  new QuestionBase({
    controlType: ControlType.Text,
    key: 'toAccount',
    label: 'To Account',
    type: InputType.Text,
    validators: [Validators.required],
  }),
];
