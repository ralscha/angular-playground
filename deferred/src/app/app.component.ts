import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PageComponent } from './page/page.component';

@Component({
  selector: 'app-root',
  imports: [PageComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.css',
})
export class AppComponent {}
