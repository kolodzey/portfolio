import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/breadcrumb/breadcrumb.component';
import { CodeGoodBadComponent } from '../../../components/code-good-bad/code-good-bad.component';
import { ScrollMenuComponent } from '../../../components/scroll-menu/scroll-menu.component';
import { TechnicalToolsBigComponent } from '../../../components/technical-tools-big/technical-tools-big.component';

@Component({
    selector: 'app-yoga-application',
    imports: [
        RouterModule,
        CodeGoodBadComponent,
        BreadcrumbComponent,
        TechnicalToolsBigComponent,
        ScrollMenuComponent,
    ],
    templateUrl: './yoga-application.component.html',
    styleUrl: './yoga-application.component.scss'
})
export class YogaApplicationComponent {
  linkBreadcrumb: string = '/projects/open-stillness-application';
  linkTextBreadcrumb: string = 'Open Stillness Project Overview';

  sections = [
    { id: 'section1', label: '1. Planning and Technology Stack' },
    { id: 'section2', label: '2. UX/UI Design Process' },
    { id: 'section3', label: '3. Development Process' },
    { id: 'section4', label: '4. Future Plans' },
    { id: 'section5', label: '5. Final Reflections' },
  ];

  codeSnippet: string = `
export class LibraryComponent implements OnInit {
  yogaPoses: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/yoga-poses.json').subscribe(data => {
      this.yogaPoses = data;
    });
  }
}`;
}
