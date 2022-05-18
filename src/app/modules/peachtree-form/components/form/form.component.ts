import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { QuestionBase } from '../../helpers/question-base.helper';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../services/form/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnChanges {
  @Input() questions: QuestionBase<any>[];
  @Output() value: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  constructor(private formService: FormService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.buildForm();
  }

  private buildForm(): void {
    if (!this.questions) {
      throw Error('Please provide questions configuration');
    }
    this.form = this.formService.toFormGroup(this.questions);
  }

  onSubmit(): void {
    this.validate();
    if (this.form.valid) {
      this.value.emit(this.form.value);
    }
  }

  validate(): void {
    this.questions.forEach((question) => {
      this.form.controls[question.key].markAsTouched();
    });
  }
}
