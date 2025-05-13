import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Dialog} from "@angular/cdk/dialog";
import {SignUpFormComponent} from "./sign-up-form/sign-up-form.component";

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly #dialog = inject(Dialog);

  protected openModal() {
    this.#dialog.open(SignUpFormComponent, { disableClose: true });
  }
}
