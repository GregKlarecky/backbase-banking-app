import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { mockProvider } from '@ngneat/spectator';
import { MockComponent, MockPipe } from 'ng-mocks';
import { SubmitButtonComponent } from 'src/app/modules/bb-ui/components/submit-button/submit-button.component';
import { PeachtreeCurrencyPipe } from 'src/app/modules/transaction/pipes/peachtree-currency/peachtree-currency.pipe';
import { reviewOptionsMock } from 'src/testing/review-options.mock';

import { ReviewComponent } from './review.component';

describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ReviewComponent,
        MockPipe(PeachtreeCurrencyPipe),
        MockComponent(SubmitButtonComponent)
      ],
      providers: [mockProvider(NgbActiveModal)]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    component.options = reviewOptionsMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
