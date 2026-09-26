import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-intro-button',
    imports: [CommonModule, RouterModule],
    templateUrl: './intro-button.component.html',
    styleUrl: './intro-button.component.scss'
})
export class IntroButtonComponent {
  @Input() headline: string = '';
  @Input() text: string = '';
  @Input() label: string = '';
  @Input() route: string = '';
}
