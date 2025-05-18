import {Component} from '@angular/core';
import {ProductContainerComponent} from "../product-container/product-container.component";
import {Products, products} from "../products";

@Component({
    selector: 'app-page',
    imports: [ProductContainerComponent],
    templateUrl: './page.component.html',
    styleUrl: './page.component.css'
})
export class PageComponent {
    protected products: Products[] = products;
}
