import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogCardComponent } from '../../../components/blog-card/blog-card.component';
import { IntroComponent } from '../../../components/intro/intro.component';

@Component({
    selector: 'app-blog',
    imports: [RouterModule, IntroComponent, BlogCardComponent],
    templateUrl: './blog.component.html'
})
export class BlogComponent {
  title: string = 'Beyond Code: Thoughts on Design & Development';
  text: string =
    'Welcome to my blog - a space where design, development, and creativity come together. Here, I share not just technical insights from my work in UX/UI design and development, but also the lessons, challenges, and inspirations that shape my journey.';
}
