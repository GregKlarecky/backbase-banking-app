import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './components/transfer/transfer.component';
import { PeachtreeFormModule } from '../peachtree-form/peachtree-form.module';
import { ReviewComponent } from './components/review/review.component';
import { BbUIModule } from '../bb-ui/bb-ui.module';

@NgModule({
  declarations: [TransferComponent, ReviewComponent],
  exports: [TransferComponent],
  imports: [CommonModule, PeachtreeFormModule, BbUIModule]
})
export class CoreModule {}
