import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbBlogComponent } from '../../../components/breadcrumb-blog/breadcrumb.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { TextImageBlogComponent } from '../../../components/text-image-blog/text-image-blog.component';

@Component({
    selector: 'app-ux-guidelines',
    imports: [
        RouterModule,
        IntroComponent,
        BreadcrumbBlogComponent,
        TextImageBlogComponent,
    ],
    templateUrl: './ux-guidelines.component.html'
})
export class UxGuidelinesComponent {
  title: string = '7 UX Design Guidelines to Keep in Mind';
  text: string =
    "UX Design guidelines serve as valuable signposts, ensuring that the best decisions are made for the user, the product, and the organization. These guidelines help to understand what constitutes great UX Design and how to consciously create it, as a fantastic user experience doesn't happen by chance.";
}
