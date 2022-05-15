import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './components/transfer/transfer.component';
import { PeachtreeFormModule } from '../peachtree-form/peachtree-form.module';

@NgModule({
  declarations: [TransferComponent],
  exports: [TransferComponent],
  imports: [CommonModule, PeachtreeFormModule]
})
export class CoreModule {}
