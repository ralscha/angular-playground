import {Component, input} from '@angular/core';
import {Products} from "../products";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-product',
    imports: [],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    host: {
        '[@animation]': ''
    },
    animations: [
        trigger('animation', [
            transition(':enter', [
                animate('1.25s', keyframes([
                        style({
                            scale: 0.7,
                            opacity: 0.7,
                            translate: '-300% 0',
                            offset: 0
                        }),
                        style({
                            scale: 1,
                            opacity: 1,
                            translate: '0 0',
                            offset: 0.8
                        }),
                        style({
                            scale: 1,
                            opacity: 1,
                            translate: '0 0',
                            offset: 1
                        })
                    ])
                )
            ])
        ])
    ]
})
export class ProductComponent {
    product = input.required<Products>();
}
