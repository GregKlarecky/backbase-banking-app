import { TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/bb-ui/components/footer/footer.component';
import { LogoComponent } from './modules/bb-ui/components/logo/logo.component';
import { TransferComponent } from './modules/core/components/transfer/transfer.component';
import { TransactionListComponent } from './modules/transaction/components/transaction-list/transaction-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(TransferComponent),
        MockComponent(TransactionListComponent),
        MockComponent(FooterComponent),
        MockComponent(LogoComponent)
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
