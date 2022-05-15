export class QuestionBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  controlType: string;
  type: string;
  options: { key: string; value: string }[];

  constructor(options: {
    controlType: 'text' | 'currency';
    key: string;
    label: string;
    type: string;
    value?: T;
    required?: boolean;
    options?: { key: string; value: string }[];
  }) {
    this.controlType = options.controlType;
    this.key = options.key;
    this.label = options.label;
    this.type = options.type;
    this.value = options.value;
    this.required = !!options.required;
    this.options = options.options || [];
  }
}
