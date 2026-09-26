import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-technical-tools-big',
    imports: [CommonModule],
    templateUrl: './technical-tools-big.component.html'
})
export class TechnicalToolsBigComponent {
  @Input() headlineTools1: string = '';
  @Input() headlineTools2: string = '';
  @Input() headlineTools3: string = '';
  @Input() textTools1: string = '';
  @Input() textTools2: string = '';
  @Input() textTools3: string = '';
}
