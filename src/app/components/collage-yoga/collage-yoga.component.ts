import { Component } from '@angular/core';

@Component({
    selector: 'app-collage-yoga',
    imports: [],
    templateUrl: './collage-yoga.component.html',
    styleUrl: './collage-yoga.component.scss'
})
export class CollageYogaComponent {
  getWebpImage(imagePath: string | undefined): string | undefined {
    if (!imagePath) return undefined;
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}
