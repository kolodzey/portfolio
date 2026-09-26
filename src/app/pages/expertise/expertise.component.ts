import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExpertiseBoxesComponent } from '../../components/expertise-boxes/expertise-boxes.component';
import { ExpertiseTagGroupComponent } from '../../components/expertise-tag-group/expertise-tag-group.component';
import { IntroComponent } from '../../components/intro/intro.component';

@Component({
    selector: 'app-expertise',
    imports: [
        RouterModule,
        IntroComponent,
        ExpertiseTagGroupComponent,
        ExpertiseBoxesComponent,
    ],
    templateUrl: './expertise.component.html'
})
export class ExpertiseComponent {
  title: string = 'My Core Strengths';
  text: string =
    'I work at the intersection of design and development, blending systems thinking, creative tools, and inclusive frontend architecture to craft digital products with care and clarity. These five interconnected pillars form the foundation of my expertise:';

  h2Usability: string = 'Usability Testing';
  h3Usability: string = 'Making assumptions visible.';
  textUsability: string =
    'Through user interviews and interface testing, I validate ideas and refine experiences to better meet real needs.';

  h2A11y: string = 'Accessibility';
  h3A11y: string = 'Designing for everyone.';
  textA11y: string =
    'I focus on inclusive design and code to make sure digital products are usable by as many people as possible.';

  h2Systems: string = 'Design Systems';
  h3Systems: string = 'Scaling creativity through structure.';
  textSystems: string =
    'I work with Figma to build consistent, flexible Design Systems that grow with products and teams.';

  h2Frontend: string = 'Modern Frontend';
  h3Frontend: string = 'From concept to code.';
  textFrontend: string =
    'With a growing focus on React and a background in Angular, I bring ideas to life with modular, accessible, and scalable frontend code.';

  h2Plugin: string = 'Figma Plugin Development';
  h3Plugin: string = 'Building tools to enable creative flow.';
  textPlugin: string =
    'I create custom plugins that solve real workflow problems, from automating tasks to extending the design process.';
}
