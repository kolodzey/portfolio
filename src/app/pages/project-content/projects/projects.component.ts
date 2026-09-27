import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntroComponent } from '../../../components/intro/intro.component';
import { ProjectCardComponent } from '../../../components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [RouterModule, IntroComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  title: string = 'Where Ideas Take Shape';
  text: string[] = [
    'These projects explore different parts of my work, from independently building digital products to creating tools that improve design and development workflows. They reflect how I like to work: understanding the whole problem, shaping the experience, and carrying ideas through to implementation.',
  ];
}
