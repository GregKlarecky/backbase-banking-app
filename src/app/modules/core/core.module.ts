import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './components/transfer/transfer.component';

@NgModule({
  declarations: [TransferComponent],
  exports: [TransferComponent],
  imports: [CommonModule]
})
export class CoreModule {}
