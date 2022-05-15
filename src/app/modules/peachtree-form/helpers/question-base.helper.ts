import { ControlType } from 'src/app/enums/control-type.enum';
import { InputType } from 'src/app/enums/input-type.enum';
import { KeyValuePair } from 'src/app/interfaces/key-value-pair.interface';
import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

export class QuestionBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  validators: ValidatorFn[];
  asyncValidators: AsyncValidatorFn[];
  controlType: ControlType;
  type: InputType;
  options: KeyValuePair;

  constructor(options: {
    controlType: ControlType;
    key: string;
    label: string;
    type: InputType;
    value?: T;
    validators?: ValidatorFn[];
    asyncValidators?: AsyncValidatorFn[];
    options?: KeyValuePair;
  }) {
    this.controlType = options.controlType;
    this.key = options.key;
    this.label = options.label;
    this.type = options.type;
    this.value = options.value;
    this.validators = options.validators || [];
    this.asyncValidators = options.asyncValidators || [];
    this.options = options.options || <KeyValuePair>{};
  }
}
