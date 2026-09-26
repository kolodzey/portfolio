import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbBlogComponent } from '../../../components/breadcrumb-blog/breadcrumb.component';
import { IntroComponent } from '../../../components/intro/intro.component';

@Component({
    selector: 'app-research',
    imports: [RouterModule, IntroComponent, BreadcrumbBlogComponent],
    templateUrl: './research.component.html',
    styleUrl: './research.component.scss'
})
export class ResearchComponent {
  title: string = 'Best Use of Quantitative & Qualitative Research';
  text: string =
    'Research, both qualitative and quantitative, is key to developing successful products. When used together, these two methods provide a rich understanding of both the product and its users. In fact, combining Qualitative and Quantitative Research is more effective than relying on just one method alone.';
}
