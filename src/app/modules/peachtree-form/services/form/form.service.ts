import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QuestionBase } from '../../helpers/question-base.helper';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor() {}

  toFormGroup(questions: QuestionBase<string>[]): FormGroup {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = new FormControl(
        question.value,
        question.validators,
        question.asyncValidators
      );
    });
    return new FormGroup(group);
  }
}
