import { Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Denise Kolodzey | Product Designer & Frontend Engineer',
  },
  {
    path: 'expertise',
    component: ExpertiseComponent,
    title: 'Expertise | Product Design, Frontend & Design Systems',
  },
  {
    path: 'about',
    component: AboutMeComponent,
    title: 'About Denise Kolodzey | Designer & Frontend Engineer',
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./pages/blog-content/blog.module').then((m) => m.BlogModule),
    title: 'Design & Development Blog | Denise Kolodzey',
  },

  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/project-content/projects.module').then(
        (m) => m.ProjectsModule
      ),
    title: 'Product Design & Frontend Projects | Denise Kolodzey',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page Not Found | Denise Kolodzey',
  },
];
