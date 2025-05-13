import {Directive, input} from '@angular/core';

@Directive({
    selector: '[appDisableOnLoading]',
    host: {
        '[disabled]': 'this.loading()'
    }
})
export class DisableOnLoadingDirective {
    loading = input<boolean>(false);
}
