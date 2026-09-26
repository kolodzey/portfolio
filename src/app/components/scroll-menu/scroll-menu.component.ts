import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-scroll-menu',
    imports: [CommonModule],
    templateUrl: './scroll-menu.component.html'
})
export class ScrollMenuComponent {
  @Input() sections: { id: string; label: string }[] = [];
}
