import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionBase } from '../../helpers/question-base.helper';
import { FormGroup } from '@angular/forms';
import { FormService } from '../../services/form/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[];
  @Output() submit: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    if (!this.questions) {
      throw Error('Please provide questions configuration');
    }
    this.form = this.formService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.validate();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    }
  }

  validate() {
    this.questions.forEach(question => {
      this.form.controls[question.key].markAsTouched();
    });
  }
}
