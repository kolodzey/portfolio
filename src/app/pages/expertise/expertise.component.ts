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
  templateUrl: './expertise.component.html',
})
export class ExpertiseComponent {
  title: string = 'My Core Strengths';
  text: string =
    'My work spans product thinking, interaction, systems, and implementation. I’m most effective when I can move between these layers, understand how they influence one another, and carry ideas through with both design intent and technical awareness.';

  h2Usability: string = 'Product Design';
  h3Usability: string = 'Understanding the whole problem';
  textUsability: string =
    'I shape product experiences from structure and user flows to interaction details, balancing user needs, product goals, and technical reality.';

  h2A11y: string = 'Design Engineering';
  h3A11y: string = 'Making design and code part of the same process.';
  textA11y: string =
    'I move between interaction design, prototyping, and implementation to explore ideas quickly and carry design intent into production without unnecessary handoffs.';

  h2Systems: string = 'Design Systems';
  h3Systems: string = 'Creating structure that helps teams move.';
  textSystems: string =
    'I design reusable systems that bring consistency to products while giving both design and development a shared foundation for working efficiently and evolving with confidence.';

  h2Frontend: string = 'Frontend Engineering';
  h3Frontend: string = 'Turning ideas into resilient interfaces.';
  textFrontend: string =
    'I build responsive, accessible, and maintainable frontend systems with a strong focus on component architecture, interaction quality, and long-term usability.';
}
