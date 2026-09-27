import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-list',
    imports: [],
    templateUrl: './list.component.html'
})
export class ListComponent {
  @Input() headline: string = '';
  @Input() tools: { name: string; description: string }[] = [];
}
