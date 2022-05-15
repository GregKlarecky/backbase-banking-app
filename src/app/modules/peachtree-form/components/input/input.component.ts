import { Component, OnInit, Input } from '@angular/core';
import { InputOptions } from 'src/app/interfaces/input-options.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() options: InputOptions;
  constructor() {}

  ngOnInit(): void {}
}
