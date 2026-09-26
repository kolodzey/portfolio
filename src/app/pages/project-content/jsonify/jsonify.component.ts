import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { CodeGoodBadComponent } from '../../../components/code-good-bad/code-good-bad.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { ListComponent } from '../../../components/list/list.component';
import { ScrollMenuComponent } from '../../../components/scroll-menu/scroll-menu.component';
import { TechnicalToolsSmallComponent } from '../../../components/technical-tools-small/technical-tools-small.component';

@Component({
    selector: 'app-jsonify',
    imports: [
        RouterModule,
        IntroComponent,
        ListComponent,
        CodeGoodBadComponent,
        BreadcrumbComponent,
        TechnicalToolsSmallComponent,
        ScrollMenuComponent,
    ],
    templateUrl: './jsonify.component.html',
    styleUrl: './jsonify.component.scss'
})
export class JsonifyComponent {
  title: string = 'JSONify Plugin: Export Text into Structured JSON Data';
  text: string[] = [
    'JSONify was born out of a simple frustration: while working on a project, I found myself constantly copying text from Figma to structure it for my JSON files. It was repetitive, tedious, and disrupted my flow. So I built JSONify. A Plugin that can turn text into structured JSON files in seconds.',
  ];

  codeSnippet: string = `
  // Queue for level-order traversal
let queue: SceneNode[] = [root];
let jsonOutput: { [key: string]: any } = {};

while (queue.length > 0) {
  // Process the first node in the queue
  let node = queue.shift()!;

  if (node.name.startsWith("exclude-")) continue;

  // Handle text nodes
  if (node.type === "TEXT") {
    jsonOutput[node.name] = node.characters.trim();
  }
  // Handle group nodes as arrays
  else if (node.type === "GROUP") {
    let groupArray = node.children.map((child) =>
      child.type === "TEXT" ? child.characters.trim() : null
    );
    jsonOutput[node.name] = groupArray.filter(Boolean);
  }

  // Add children to the queue for further traversal
  if ("children" in node && node.children) {
    queue.push(...node.children);
  }
}
`;

  sections = [
    { id: 'section1', label: '1. Purpose & Goals' },
    { id: 'section2', label: '2. Key Features and Algorithm Highlights' },
    { id: 'section3', label: '3. Development Insights' },
    { id: 'section4', label: '4. Reflections on the Creative Process' },
  ];
}
