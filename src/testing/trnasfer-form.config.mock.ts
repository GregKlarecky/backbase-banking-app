import { ControlType } from 'src/app/enums/control-type.enum';
import { InputType } from 'src/app/enums/input-type.enum';
import { QuestionBase } from 'src/app/modules/peachtree-form/helpers/question-base.helper';

export const transferFormConfigMock = [
  new QuestionBase({
    value: 'testing Account',
    controlType: ControlType.Text,
    key: 'fromAccount',
    label: 'From Account',
    type: InputType.Text
  })
];
