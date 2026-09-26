import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverviewCardData } from '../../models/card.model';
import { ArticleService } from '../../services/article.service';

@Component({
    selector: 'app-blog-card',
    imports: [CommonModule, RouterModule],
    templateUrl: './blog-card.component.html'
})
export class BlogCardComponent {
  @Input() articles: OverviewCardData[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }
}
