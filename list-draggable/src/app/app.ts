import { Component, computed, signal } from '@angular/core';
import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

type Todo = { id: string; title: string; done?: boolean };

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CdkDropList, CdkDrag],
})
export class App {
  protected todos = signal<Todo[]>([
    { id: '1', title: 'Pay invoices' },
    { id: '2', title: 'Email onboarding checklist' },
    { id: '3', title: 'Review pull request' },
    { id: '4', title: 'Prep sprint demo' },
  ]);

  protected drop(event: CdkDragDrop<Todo[]>) {
    this.todos.update(list => {
      const next = [...list];
      moveItemInArray(next, event.previousIndex, event.currentIndex);
      return next;
    });
  }

  protected remainingCount = computed(() =>
    this.todos().filter(t => !t.done).length);

  protected toggle(t: Todo) {
    this.todos.update(list =>
      list.map(item => (item.id === t.id ? { ...item, done: !item.done } : item))
    );
  }
}
