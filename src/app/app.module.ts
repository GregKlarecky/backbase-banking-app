import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BbUIModule } from './modules/bb-ui/bb-ui.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PeachtreeFormModule } from './modules/peachtree-form/peachtree-form.module';
import { CoreModule } from './modules/core/core.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BbUIModule,
    CoreModule,
    PeachtreeFormModule,
    TransactionModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
