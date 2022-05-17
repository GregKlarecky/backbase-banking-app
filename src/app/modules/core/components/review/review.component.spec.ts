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
        MockPipe(PeachtreeCurrencyPipe, value => `${value} EUR`),
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

  it('should display transfer receiver account', () => {
    const template: HTMLElement = fixture.nativeElement;
    const toAccount = template.querySelectorAll('[unit-test=to-account]')[0];
    expect(toAccount.textContent).toEqual(reviewOptionsMock.toAccount);
  });

  it('should display transfer amount', () => {
    const template: HTMLElement = fixture.nativeElement;
    const amount = template.querySelectorAll('[unit-test=amount]')[0];
    expect(amount.textContent).toEqual(`${reviewOptionsMock.amount} EUR`);
  });

  it('should close modal on close button click', () => {
    const template: HTMLElement = fixture.nativeElement;
    const closeButton = template.querySelectorAll(
      '[unit-test=close-button]'
    )[0];
    const activeModalMock = TestBed.inject(NgbActiveModal);
    (<HTMLElement>closeButton).click();
    expect(activeModalMock.close).toHaveBeenCalled();
  });

  it('should close modal on dismiss button click', () => {
    const template: HTMLElement = fixture.nativeElement;
    const dismissButton = template.querySelectorAll(
      '[unit-test=dismiss-button]'
    )[0];
    const activeModalMock = TestBed.inject(NgbActiveModal);
    (<HTMLElement>dismissButton).click();
    expect(activeModalMock.dismiss).toHaveBeenCalled();
  });

  it('should call changeBalance and makeTransfer functions and close the modal', () => {
    const changeBalanceSpy = spyOn(component, 'changeBalance');
    const makeTransferSpy = spyOn(component, 'makeTransfer');
    const activeModalMock = TestBed.inject(NgbActiveModal);

    component.onSubmitForm();

    expect(changeBalanceSpy).toHaveBeenCalled();
    expect(makeTransferSpy).toHaveBeenCalled();
    expect(activeModalMock.close).toHaveBeenCalled();
  });
});
