import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ClickOutside} from '../click-outside';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-user-dropdown',
  imports: [ClickOutside, NgOptimizedImage],
  templateUrl: './user-dropdown.html',
  styleUrl: './user-dropdown.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDropdown {
  protected readonly isOpen = signal(false);

  protected logout() {
    this.isOpen.set(false);
  }
}
