import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbBlogComponent } from '../../../components/breadcrumb-blog/breadcrumb.component';
import { IntroComponent } from '../../../components/intro/intro.component';

@Component({
    selector: 'app-keynote-plugin-development',
    imports: [BreadcrumbBlogComponent, IntroComponent, RouterModule],
    templateUrl: './keynote-plugin-development.component.html',
    styleUrl: './keynote-plugin-development.component.scss'
})
export class KeynotePluginDevelopmentComponent {
  title: string =
    'From Chaos to Creation: My Journey into Figma Plugin Development';
  text: string[] = [
    'Earlier this year, I gave a talk at a Design & Dev Meetup called “From Chaos to Creation: Building a Figma Plugin” Why that title? Because that’s exactly how learning Figma plugin development felt to me.',
    'In 2024, I decided to dive into this new world and what I discovered was not just about APIs and code, but about curiosity, creativity, and turning small ideas into real tools.',
  ];
}
