import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { BbUIModule } from '../bb-ui/bb-ui.module';

@NgModule({
  declarations: [InputComponent, FormComponent],
  exports: [InputComponent, FormComponent],
  imports: [CommonModule, ReactiveFormsModule, BbUIModule]
})
export class PeachtreeFormModule {}
