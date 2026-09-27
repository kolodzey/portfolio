import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-scroll-menu',
    imports: [],
    templateUrl: './scroll-menu.component.html'
})
export class ScrollMenuComponent {
  @Input() sections: { id: string; label: string }[] = [];
}
