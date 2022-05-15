import { ControlType } from 'src/app/enums/control-type.enum';
import { InputType } from 'src/app/enums/input-type.enum';
import { KeyValuePair } from 'src/app/interfaces/key-value-pair.interface';

export class QuestionBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  controlType: ControlType;
  type: InputType;
  options: KeyValuePair;

  constructor(options: {
    controlType: ControlType;
    key: string;
    label: string;
    type: InputType;
    value?: T;
    required?: boolean;
    options?: KeyValuePair;
  }) {
    this.controlType = options.controlType;
    this.key = options.key;
    this.label = options.label;
    this.type = options.type;
    this.value = options.value;
    this.required = !!options.required;
    this.options = options.options || <KeyValuePair>{};
  }
}
