import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-technical-tools-small',
    imports: [],
    templateUrl: './technical-tools-small.component.html'
})
export class TechnicalToolsSmallComponent {
  @Input() textTechnologies: string =
    'TypeScript, JavaScript, HTML, CSS, Figma Design & API ';
}
