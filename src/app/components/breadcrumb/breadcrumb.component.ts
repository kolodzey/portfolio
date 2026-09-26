import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-breadcrumb',
    imports: [RouterModule],
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent {
  @Input() linkTextBreadcrumb: string = 'Projects Overview';
  @Input() linkBreadcrumb: string = '/projects';
}
