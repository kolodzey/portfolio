import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntroComponent } from '../../components/intro/intro.component';

@Component({
  selector: 'app-about-me',
  imports: [RouterModule, IntroComponent],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  title: string = 'How I Found My Place in Tech';
  text: string =
    'I started in product design, moved into software development, and later found my way into UX/UI. Over time, I stopped seeing design and engineering as separate paths. Today, I work across both: shaping experiences, understanding the systems behind them, and turning ideas into products people can actually use.';
}
