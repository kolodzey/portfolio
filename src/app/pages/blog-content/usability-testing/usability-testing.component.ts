import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbBlogComponent } from '../../../components/breadcrumb-blog/breadcrumb.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { ListComponent } from '../../../components/list/list.component';
import { TextHighlightComponent } from '../../../components/text-highlight/text-highlight.component';

@Component({
    selector: 'app-usability-testing',
    imports: [
        RouterModule,
        IntroComponent,
        ListComponent,
        BreadcrumbBlogComponent,
        TextHighlightComponent,
    ],
    templateUrl: './usability-testing.component.html'
})
export class UsabilityTestingComponent {
  title: string = 'Usability Testing Made Easy - in 4 Steps';
  text: string[] = [
    "Is the website or application being used effectively? Are users happy with the experience? Usability Testing seeks to answer these crucial questions. Since we can't always predict how users will behave, assumptions are inevitable. Usability Testing allows us to verify those assumptions.",
    'By collecting valuable data, Usability Testing brings objectivity to design discussions and enables data-driven decisions. It can be conducted regularly and become a natural part of the design process. Below, I’ll explain how to carry out Usability Testing in four simple steps.',
  ];
}
