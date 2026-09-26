import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-expertise-boxes',
    imports: [CommonModule],
    templateUrl: './expertise-boxes.component.html',
    styleUrl: './expertise-boxes.component.scss'
})
export class ExpertiseBoxesComponent {
  @Input() headline2: string = '';
  @Input() headline3: string = '';
  @Input() expertiseText: string = '';
  @Input() color: 'frontend' | 'a11y' | 'plugin' | 'systems' | 'usability' =
    'frontend';
}
