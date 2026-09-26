import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbBlogComponent } from '../../../components/breadcrumb-blog/breadcrumb.component';
import { CodeGoodBadComponent } from '../../../components/code-good-bad/code-good-bad.component';
import { IntroComponent } from '../../../components/intro/intro.component';

@Component({
    selector: 'app-angular-accessibility',
    imports: [
        RouterModule,
        IntroComponent,
        CodeGoodBadComponent,
        BreadcrumbBlogComponent,
    ],
    templateUrl: './angular-accessibility.component.html'
})
export class AngularAccessibilityComponent {
  title: string =
    '5 Accessibility Mistakes I Made (and Fixed) While Building an Angular App';
  text: string =
    "Accessibility isn't new to me. But here's the thing: even with years of awareness, I was still making mistakes. Recently, while improving accessibility in an Angular project, I uncovered five crucial lessons - some Angular-specific, others universal. Here's what I learned (and fixed).";

  exampleCode: string = `<ng-container [ngSwitch]="headingLevel">
  <h2 *ngSwitchCase="'h2'">{{ routine.name }}</h2>
  <h3 *ngSwitchCase="'h3'">{{ routine.name }}</h3>
</ng-container>`;

  exampleCode1: string = `@Input() headingLevel: 'h2' | 'h3' = 'h2';`;
  exampleCode2: string = `<app-training-card [headingLevel]="'h3'"></app-training-card>`;
  exampleCode3: string = `<div *ngFor="let desc of description">
  <p class="margin-bottom-16">{{ desc }}</p>
</div>`;
  exampleCode4: string = `<ng-container *ngFor="let desc of description">
  <p class="margin-bottom-16">{{ desc }}</p>
</ng-container>`;
  exampleCode5: string = `<button [routerLink]="[buttonLink]">{{ buttonLabel }}</button>`;
  exampleCode6: string = `<a [routerLink]="[navigationLink]">{{ navigationLabel }}</a>`;
  exampleCode7: string = `<a routerLink="/">
  <img src="public/logo.svg" alt="" class="logo" />
</a>`;
  exampleCode8: string = `<a routerLink="/">
  <img src="public/logo.svg" alt="OpenStillness Home" class="logo" />
</a>
`;
}
