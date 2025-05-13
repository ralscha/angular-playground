import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {CdkDragMove, DragDropModule} from "@angular/cdk/drag-drop";

@Component({
    selector: 'app-sidebar-resize',
    templateUrl: './sidebar-resize.component.html',
    styleUrl: './sidebar-resize.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DragDropModule],
})
export class SidebarResizeComponent {
    protected defaultWidth = 250;
    protected currentWidth = signal(this.defaultWidth);

    protected onDragMoved(event: CdkDragMove) {
        this.currentWidth.set(event.pointerPosition.x);

        const element = event.source.element.nativeElement;
        element.style.transform = 'none';
    }

    protected reset() {
        this.currentWidth.set(this.defaultWidth);
    }
}
