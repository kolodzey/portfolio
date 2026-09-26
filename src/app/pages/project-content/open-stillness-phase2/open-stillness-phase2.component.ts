import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { ScrollMenuComponent } from '../../../components/scroll-menu/scroll-menu.component';

@Component({
    selector: 'app-open-stillness-phase2',
    imports: [RouterModule, BreadcrumbComponent, ScrollMenuComponent],
    templateUrl: './open-stillness-phase2.component.html',
    styleUrl: './open-stillness-phase2.component.scss'
})
export class OpenStillnessPhase2Component {
  linkBreadcrumb: string = '/projects/open-stillness-application';
  linkTextBreadcrumb: string = 'Open Stillness Project Overview';

  sections = [
    {
      id: 'section1',
      label: '1. Introducing Meditation & Breathwork Sections',
    },
    { id: 'section2', label: '2. Extending the Architecture' },
    { id: 'section3', label: '3. Redesigning the Navigation' },
    { id: 'section4', label: '4. From Kokolo Yoga to Open Stillness' },
    { id: 'section5', label: '5. Enhancing Accessibility' },
    { id: 'section6', label: '6. Final Reflections & Learnings' },
  ];
}
