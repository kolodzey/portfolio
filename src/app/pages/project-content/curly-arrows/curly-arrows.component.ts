import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { CodeGoodBadComponent } from '../../../components/code-good-bad/code-good-bad.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { ScrollMenuComponent } from '../../../components/scroll-menu/scroll-menu.component';
import { TechnicalToolsSmallComponent } from '../../../components/technical-tools-small/technical-tools-small.component';

@Component({
    selector: 'app-curly-arrows',
    imports: [
        RouterModule,
        BreadcrumbComponent,
        IntroComponent,
        TechnicalToolsSmallComponent,
        ScrollMenuComponent,
        CodeGoodBadComponent,
    ],
    templateUrl: './curly-arrows.component.html'
})
export class CurlyArrowsComponent {
  title: string = 'Curly Arrows: Point with Personality';
  text: string =
    'Curly Arrows lets users insert playful, artistic arrows into their Figma designs.';

  sections = [
    { id: 'section1', label: '1. Purpose & Goals' },
    { id: 'section2', label: '2. Features & Visual Design' },
    { id: 'section3', label: '3. Development Insights' },
    { id: 'section4', label: '4. Final Reflections' },
  ];

  exampleCode1: string = `
svgString = svgString.replace(/<path\\s([^>]*?)\\/?>/g, (match, attrs) => {
  const cleanAttrs = attrs
    .replace(/stroke=".*?"/, "")
    .replace(/stroke-width=".*?"/, "")
    .trim();
  return \`<path \${cleanAttrs} stroke="\${strokeColor}" stroke-width="\${strokeWidth}"/>\`;
});

const wrapper = figma.createNodeFromSvg(svgString);
figma.currentPage.appendChild(wrapper);
`;
}
