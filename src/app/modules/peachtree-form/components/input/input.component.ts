import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../../helpers/question-base.helper';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  constructor() {}

  ngOnInit(): void {}
}
