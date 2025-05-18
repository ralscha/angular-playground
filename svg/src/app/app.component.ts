import {Component} from '@angular/core';
import {ChartComponent, ChartItem} from "./chart/chart.component";

@Component({
    selector: 'app-root',
    imports: [ChartComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    fruit: ChartItem[] = [
        {
            count: 4,
            label: 'apples'
        },
        {
            count: 8,
            label: 'bananas'
        },
        {
            count: 15,
            label: 'kiwis'
        },
        {
            count: 16,
            label: 'oranges'
        },
        {
            count: 23,
            label: 'lemons'
        }
    ];

    carsSold: ChartItem[] = [
        {
            count: 12,
            label: 'Toyota'
        },
        {
            count: 6,
            label: 'Ford'
        },
        {
            count: 21,
            label: 'Chevrolet'
        },
        {
            count: 3,
            label: 'BMW'
        },
        {
            count: 17,
            label: 'Lexus'
        },
        {
            count: 13,
            label: 'Tesla'
        },
        {
            count: 8,
            label: 'Kia'
        },
        {
            count: 19,
            label: 'Dodge'
        }
    ];
}
