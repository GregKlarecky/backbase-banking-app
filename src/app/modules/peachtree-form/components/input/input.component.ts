import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../../helpers/question-base.helper';
import { ControlType } from 'src/app/enums/control-type.enum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  controlType: typeof ControlType = ControlType;
  constructor() {}

  ngOnInit(): void {}
}
