import { Component, Input } from '@angular/core';
import { QuestionBase } from '../../helpers/question-base.helper';
import { ControlType } from 'src/app/enums/control-type.enum';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  controlType: typeof ControlType = ControlType;
  get hasError() {
    return (
      this.form.controls[this.question.key].touched &&
      this.form.controls[this.question.key].errors
    );
  }

  get errorMessages(): string[] {
    const errors = this.form.controls[this.question.key].errors;
    if (!errors) {
      return [];
    }
    const keys = Object.keys(errors);
    return keys.map(key => {
      if (key === 'required') {
        return 'This field is required.';
      }
      return errors[key];
    });
  }
}
