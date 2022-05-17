import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { mockProvider } from '@ngneat/spectator';
import { stateMock } from 'src/testing/state.service.mock';
import { StateService } from '../../services/state/state.service';
import { TransferFormService } from '../../services/transfer-form/transfer-form.service';
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
        mockProvider(NgbModal)
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
