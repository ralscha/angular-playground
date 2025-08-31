import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {MOCK_PRODUCT} from '../../products';

@Component({
  selector: 'app-grid-view',
  imports: [],
  templateUrl: './grid-view.html',
  styleUrl: './grid-view.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridView {
readonly product = input.required<MOCK_PRODUCT>();
}
