import {Component, signal} from '@angular/core';
import {ListMode, ViewModeToggle} from './view-mode-toggle/view-mode-toggle';
// import {ProductItem} from './product-item/product-item';
import {ListView} from './list-view/list-view';
import {MOCK_PRODUCTS} from '../products';
import {GridView} from './grid-view/grid-view';

@Component({
  selector: 'app-root',
  imports: [
    ViewModeToggle,
    // ProductItem,
    GridView,
    ListView
  ],
  templateUrl: './app.html'
})
export class App {
  protected products = MOCK_PRODUCTS;
  protected viewMode = signal<ListMode>('list');
}
