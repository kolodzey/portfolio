import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { CodeGoodBadComponent } from '../../../components/code-good-bad/code-good-bad.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { ScrollMenuComponent } from '../../../components/scroll-menu/scroll-menu.component';
import { TechnicalToolsSmallComponent } from '../../../components/technical-tools-small/technical-tools-small.component';

@Component({
    selector: 'app-pattern-hearts',
    imports: [
        RouterModule,
        IntroComponent,
        CodeGoodBadComponent,
        BreadcrumbComponent,
        TechnicalToolsSmallComponent,
        ScrollMenuComponent,
    ],
    templateUrl: './pattern-hearts.component.html',
    styleUrl: './pattern-hearts.component.scss'
})
export class PatternHeartsComponent {
  title: string = 'Love Comes in All Patterns: Illustrated Hearts';
  text: string[] = [
    'This plugin brings a collection of crafted, patterned hearts to Figma designs - perfect for adding warmth, charm, and creativity.',
  ];

  exampleCode1: string = `const node = figma.createNodeFromSvg(heartSVG);
const heartVector = node.findOne((n) => n.type === "VECTOR") as VectorNode;

figma.currentPage.appendChild(heartVector);
node.remove();
  `;
  exampleCode2: string = `const gradientFill: GradientPaint = {
    type: "GRADIENT_LINEAR",
    gradientStops: [...],
    gradientTransform: [...],
  };

heartVector.fills = [gradientFill];`;

  exampleCode3: string = `const r = parseInt(hex.slice(1, 3), 16) / 255;
const g = parseInt(hex.slice(3, 5), 16) / 255;
const b = parseInt(hex.slice(5, 7), 16) / 255;`;

  sections = [
    { id: 'section1', label: '1. Purpose & Goals' },
    { id: 'section2', label: '2. Features & Visual Design' },
    { id: 'section3', label: '3. Development Insights' },
    { id: 'section4', label: '4. Final Reflections' },
  ];
}
