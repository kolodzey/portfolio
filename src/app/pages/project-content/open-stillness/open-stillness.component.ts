import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { MyQuoteComponent } from '../../../components/my-quote/my-quote.component';

@Component({
  selector: 'app-open-stillness',
  imports: [
    RouterModule,
    IntroComponent,
    MyQuoteComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './open-stillness.component.html',
  styleUrl: 'open-stillness.component.scss',
})
export class OpenStillnessComponent {
  title: string =
    'Open Stillness:\n An independent product built from concept to code.';
  text: string =
    'Open Stillness is a seasonal platform for Meditation, Breathwork, and Yin Stretching that I conceived, designed, illustrated, developed, and continue to evolve end to end.';
}
