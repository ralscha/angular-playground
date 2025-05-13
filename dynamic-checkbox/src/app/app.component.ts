import {ChangeDetectionStrategy, Component} from '@angular/core';
import {State, states} from './states';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-root',
    imports: [ReactiveFormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './app.component.css',
    templateUrl: './app.component.html',
})
export class AppComponent {
    protected states: State[] = states;

    protected readonly selectAll = new FormControl(false, {nonNullable: true});
    protected readonly form = new FormGroup(
        Object.fromEntries(
            this.states.map(
                option => [option.value, new FormControl(false, {nonNullable: true})]
            )
        )
    );

    constructor() {
        this.selectAll.valueChanges
            .pipe(takeUntilDestroyed())
            .subscribe(checked => this.#toggleAll(checked));
    }

    get selectedValues() {
        return Object.keys(this.form.value).filter(key => this.form.value[key]);
    }

    #toggleAll(checked: boolean) {
        const controlsArray = Object.keys(this.form.controls);
        controlsArray.forEach(key => {
            this.form.get(key)?.setValue(checked, {emitEvent: false});
        });
    }
}
