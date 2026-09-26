import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { CodeGoodBadComponent } from '../../../components/code-good-bad/code-good-bad.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { ScrollMenuComponent } from '../../../components/scroll-menu/scroll-menu.component';
import { TechnicalToolsBigComponent } from '../../../components/technical-tools-big/technical-tools-big.component';

@Component({
    selector: 'app-hexify',
    imports: [
        RouterModule,
        IntroComponent,
        CodeGoodBadComponent,
        BreadcrumbComponent,
        TechnicalToolsBigComponent,
        ScrollMenuComponent,
    ],
    templateUrl: './hexify.component.html',
    styleUrl: './hexify.component.scss'
})
export class HexifyComponent {
  title: string = 'Hexify Plugin: Seamlessly Bring Figma Colors to Code';
  text: string[] = [
    'Creating Hexify started from a simple need: I wanted a way to effortlessly convert Figma Color Collections into Code, without the tedious task of transferring Color Values manually. So I made Hexify - a small tool that turns Color Collections into SCSS, CSS, or JSON, all ready for use with just a few clicks.',
  ];

  codeSnippet: string = `
  export async function getColorVariablesByIds(
    variableIds: string[]
  ): Promise<Variable[]> {
    const variables = await Promise.all(
      variableIds.map(async (id) => {
        try {
          return await figma.variables.getVariableByIdAsync(id);
        } catch (error) {
          console.error('Error retrieving variable with ID:', error);
          return null;
        }
      })
    );

    return variables.filter(
      (variable): variable is Variable =>
        variable !== null && variable.resolvedType === "COLOR"
    );
  }`;

  sections = [
    { id: 'section1', label: '1. Purpose & Goals' },
    { id: 'section2', label: '2. Architecture' },
    { id: 'section3', label: '3. Visual Design & User Flow' },
    { id: 'section4', label: '4. Development Insights' },
    { id: 'section5', label: '5. Reflections & Future Plans' },
  ];
}
