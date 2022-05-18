import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { mockProvider } from '@ngneat/spectator';
import { TransferFormValue } from 'src/app/interfaces/transfer-form-value.interface';
import { stateMock } from 'src/testing/state.service.mock';
import { StateService } from '../../services/state/state.service';
import { TransferFormService } from '../../services/transfer-form/transfer-form.service';
import { ReviewComponent } from '../review/review.component';
import { TransferComponent } from './transfer.component';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferComponent],
      providers: [
        mockProvider(StateService, stateMock),
        mockProvider(TransferFormService),
        mockProvider(NgbModal),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
  });

  it('should subscribe to balance change', () => {
    const buildFormOnBalanceChange = spyOn(
      component,
      'buildFormOnBalanceChange'
    );
    fixture.detectChanges();
    expect(buildFormOnBalanceChange).toHaveBeenCalled();
  });

  it('should assign new trnasferFormQuestions on balnce change', () => {
    const stateMock = TestBed.inject(StateService);
    const transferFormMock = TestBed.inject(TransferFormService);
    fixture.detectChanges();
    stateMock.balance$.next(500);

    expect(transferFormMock.getQuestions).toHaveBeenCalledWith(
      'Test Account Name: 500 €'
    );
    expect(transferFormMock.getQuestions).not.toHaveBeenCalledWith(
      'Bad Account Name: 500 €'
    );
  });

  it('should assign new trnasferFormQuestions once when the next value is the same', () => {
    const stateMock = TestBed.inject(StateService);
    const transferFormMock = TestBed.inject(TransferFormService);
    fixture.detectChanges();
    stateMock.balance$.next(500);
    stateMock.balance$.next(500);

    expect(transferFormMock.getQuestions).toHaveBeenCalledTimes(1);
    expect(transferFormMock.getQuestions).not.toHaveBeenCalledTimes(2);
  });

  it('should open ReviewComponent modal', () => {
    const ngbModalMock = TestBed.inject(NgbModal);
    const componenetMockReference = { componentInstance: { options: {} } };
    (<jasmine.Spy>ngbModalMock.open).and.returnValue(componenetMockReference);
    fixture.detectChanges();
    const formValue: TransferFormValue = {
      amount: '123',
      fromAccount: 'Tester XYZ',
      toAccount: 'Adresat ABC',
    };
    component.openReview(formValue);
    expect(ngbModalMock.open).toHaveBeenCalledWith(ReviewComponent);
    expect(componenetMockReference.componentInstance.options).toEqual(
      formValue
    );
  });
});
