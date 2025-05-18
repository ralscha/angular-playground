import {Component, input} from '@angular/core';
import {ProductComponent} from "../product/product.component";
import {Products} from "../products";

@Component({
    selector: 'app-product-container',
    imports: [ProductComponent],
    templateUrl: './product-container.component.html',
    styleUrl: './product-container.component.css'
})
export class ProductContainerComponent {
    product = input.required<Products>();
}
