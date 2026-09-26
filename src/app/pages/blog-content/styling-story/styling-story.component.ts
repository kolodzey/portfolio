import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbBlogComponent } from '../../../components/breadcrumb-blog/breadcrumb.component';
import { IntroComponent } from '../../../components/intro/intro.component';
import { MyQuoteComponent } from '../../../components/my-quote/my-quote.component';

@Component({
    selector: 'app-styling-story',
    imports: [
        RouterModule,
        BreadcrumbBlogComponent,
        IntroComponent,
        MyQuoteComponent,
    ],
    templateUrl: './styling-story.component.html'
})
export class StylingStoryComponent {
  title: string = 'My Styling Story: From CSS to Tailwind';
  text: string =
    "Over a decade ago, I wrote my first lines of CSS. Since then, I've worked through the float era, discovered the power of SCSS, and recently rewired my brain around Tailwind CSS. This is not a technical deep dive - it's a personal reflection on how styling the web has evolved, and what I've learned along the way.";
  myQuote: string =
    'During a visit to Warsaw in 2024, I was in a book-filled coffee shop and picked up an old web development guide from the early 2000s. It showed how to build layouts using HTML tables. I smiled.';

  getWebpImage(imagePath: string | undefined): string | undefined {
    if (!imagePath) return undefined;
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}
