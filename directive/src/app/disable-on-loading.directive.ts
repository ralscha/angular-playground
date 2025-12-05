import {Directive, input} from '@angular/core';

@Directive({
    selector: '[appDisableOnLoading]',
    host: {
        '[attr.disabled]': 'this.loading() ? true : null'
    }
})
export class DisableOnLoadingDirective {
    loading = input<boolean>(false);
}
