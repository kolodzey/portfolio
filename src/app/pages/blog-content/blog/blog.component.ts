import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogCardComponent } from '../../../components/blog-card/blog-card.component';
import { IntroComponent } from '../../../components/intro/intro.component';

@Component({
  selector: 'app-blog',
  imports: [RouterModule, IntroComponent, BlogCardComponent],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  title: string = 'Notes on Design, Code & the Space Between';
  text: string =
    'I write about the space between design and development: from design systems and frontend architecture to tooling, accessibility, AI-assisted workflows, and the lessons that come from building real products.';
}
