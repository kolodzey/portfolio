import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-code-good-bad',
    imports: [CommonModule],
    templateUrl: './code-good-bad.component.html',
    styleUrl: './code-good-bad.component.scss'
})
export class CodeGoodBadComponent {
  @Input() code: string = '';
  @Input() imageUrl: string = '';

  get formattedCode(): string {
    return this.code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}
