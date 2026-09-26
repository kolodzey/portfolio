import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbBlogComponent } from '../../../components/breadcrumb-blog/breadcrumb.component';
import { IntroComponent } from '../../../components/intro/intro.component';

@Component({
    selector: 'app-design-process',
    imports: [RouterModule, BreadcrumbBlogComponent, IntroComponent],
    templateUrl: './design-process.component.html',
    styleUrl: './design-process.component.scss'
})
export class DesignProcessComponent {
  title: string = 'My Design Process: A Practical Guide Shaped by Experience';
  text: string[] = [
    'When I got my first job as a designer, I had no idea how much variety this field would throw at me. Some projects began with nothing: no brand, no visuals, not even a logo. Others landed on my desk with a full corporate identity already in place and just needed thoughtful application. Some were ongoing projects with an established structure, others were new ideas waiting to take shape. Over time, I found myself returning to a process that helped me navigate the ambiguity and diversity of design work.',
    "It's not a rigid formula, it's more like a compass. A flexible structure I can adapt depending on the project's maturity, budget, team setup, and goals. It's grounded in the principles of user-centered design.",
  ];
}
