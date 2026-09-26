import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-intro',
    imports: [CommonModule],
    templateUrl: './intro.component.html'
})
export class IntroComponent {
  @Input() title: string = '';
  @Input() text: string | string[] = '';

  isArray(value: any): value is string[] {
    return Array.isArray(value);
  }
}
