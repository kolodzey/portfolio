import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollageYogaComponent } from '../../components/collage-yoga/collage-yoga.component';
import { ExpertiseTagGroupComponent } from '../../components/expertise-tag-group/expertise-tag-group.component';
import { HeroHomeComponent } from '../../components/hero-home/hero-home.component';
import { IntroButtonComponent } from '../../components/intro-button/intro-button.component';
import { OverviewCardData } from '../../models/card.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    HeroHomeComponent,
    IntroButtonComponent,
    CollageYogaComponent,
    CommonModule,
    ExpertiseTagGroupComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  articles: OverviewCardData[];

  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.getArticles();
  }

  get firstThreeArticles(): OverviewCardData[] {
    return this.articles.slice(0, 3);
  }

  getWebpImage(imagePath: string | undefined): string | undefined {
    if (!imagePath) return undefined;
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}
