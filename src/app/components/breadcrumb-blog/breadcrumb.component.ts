import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-breadcrumb',
    imports: [RouterModule],
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbBlogComponent {
  @Input() linkTextBreadcrumb: string = 'Blog Overview';
  @Input() linkBreadcrumb: string = '/blog';
}
