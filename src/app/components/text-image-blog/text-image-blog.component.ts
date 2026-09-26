import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-text-image-blog',
    imports: [CommonModule],
    templateUrl: './text-image-blog.component.html',
    styleUrl: './text-image-blog.component.scss'
})
export class TextImageBlogComponent {
  @Input() headlineH2: string = '';
  @Input() paragraphs: string[] = [];
  @Input() imgSrc: string = '';
  @Input() imgWebpSrc: string = '';
  @Input() single: boolean = false;
}
