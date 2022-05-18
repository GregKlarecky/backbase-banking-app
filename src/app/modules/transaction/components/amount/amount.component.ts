import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TransactionFacade } from '../../helpers/transaction.facade';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmountComponent {
  @Input() transaction: TransactionFacade;
}
