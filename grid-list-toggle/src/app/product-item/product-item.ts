import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {MOCK_PRODUCT} from '../../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItem {
  readonly product = input.required<MOCK_PRODUCT>();
}
