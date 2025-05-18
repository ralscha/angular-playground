import {Component, input, signal} from '@angular/core';

export interface ChartItem {
    count: number;
    label: string;
}

@Component({
    selector: 'app-chart',
    imports: [],
    templateUrl: './chart.component.svg',
    styleUrl: './chart.component.css'
})
export class ChartComponent {
    chartItems = input.required<ChartItem[]>();
    protected activeIndex = signal(-1);
}
