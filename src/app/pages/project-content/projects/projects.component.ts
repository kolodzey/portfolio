import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollageYogaComponent } from '../../../components/collage-yoga/collage-yoga.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { ProjectCardComponent } from '../../../components/project-card/project-card.component';

@Component({
    selector: 'app-projects',
    imports: [
        RouterModule,
        IntroComponent,
        ProjectCardComponent,
        CollageYogaComponent,
    ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  title: string = 'Where Ideas Take Shape: My Projects';
  text: string[] = [
    'Welcome to my collection of projects, a reflection of my journey as a Software Developer, Designer, and Problem-Solver. Each piece is created with care, curiosity, and creativity, where thoughtful design and technical craftsmanship come together to shape meaningful experiences.',
  ];
}
