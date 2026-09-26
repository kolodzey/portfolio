import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-phases-project',
    imports: [RouterModule, CommonModule],
    templateUrl: './phases-project.component.html',
    styleUrl: './phases-project.component.scss'
})
export class PhasesProjectComponent {
  @Input() phasesCount: string = '';
  @Input() phasesText: string = '';
  @Input() phasesProgress: string = '';
  @Input() phasesHeadline: string = '';
  @Input() phasesLink: string = '';
  @Input() phasesImgWebp: string = '';
  @Input() phasesImg: string = '';
  @Input() isSwapped: boolean = false;
  @Input() isActive: boolean = false;
  @Input() pillColor: 'blue' | 'brown' | 'neutral' = 'blue';
}
