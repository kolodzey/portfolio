import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { MyQuoteComponent } from '../../../components/my-quote/my-quote.component';
import { PhasesProjectComponent } from '../../../components/phases-project/phases-project.component';
import { TechnicalToolsBigComponent } from '../../../components/technical-tools-big/technical-tools-big.component';

@Component({
    selector: 'app-open-stillness',
    imports: [
        RouterModule,
        IntroComponent,
        MyQuoteComponent,
        BreadcrumbComponent,
        PhasesProjectComponent,
        TechnicalToolsBigComponent,
    ],
    templateUrl: './open-stillness.component.html'
})
export class OpenStillnessComponent {
  title: string =
    'Open Stillness - A Journey in Meditation, Yin-Style Yoga & Breathwork';
  text: string =
    'Mindfulness Meets Technology: This platform is designed to help people cultivate mindfulness through Meditation, Yin-Style Yoga, and Breathwork. What started as a small project has grown into a feature-rich experience - continuously evolving with new improvements.';

  getWebpImage(imagePath: string | undefined): string | undefined {
    if (!imagePath) return undefined;
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}
