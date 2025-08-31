import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {MOCK_PRODUCT} from '../../products';

@Component({
  selector: 'app-list-view',
  imports: [],
  templateUrl: './list-view.html',
  styleUrl: './list-view.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListView {
	readonly product = input.required<MOCK_PRODUCT>();
}
