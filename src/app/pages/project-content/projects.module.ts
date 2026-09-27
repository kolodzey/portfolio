import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurlyArrowsComponent } from './curly-arrows/curly-arrows.component';
import { HexifyComponent } from './hexify/hexify.component';
import { JsonifyComponent } from './jsonify/jsonify.component';
import { OpenStillnessPhase2Component } from './open-stillness-phase2/open-stillness-phase2.component';
import { OpenStillnessComponent } from './open-stillness/open-stillness.component';
import { PatternHeartsComponent } from './pattern-hearts/pattern-hearts.component';
import { ProjectsComponent } from './projects/projects.component';
import { SmileyExpressComponent } from './smiley-express/smiley-express.component';
import { YogaApplicationComponent } from './yoga-application/yoga-application.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent }, // Main Projects page
  { path: 'yin-style-yoga-application', component: YogaApplicationComponent },
  { path: 'figma-plugin-hexify', component: HexifyComponent },
  { path: 'figma-plugin-jsonify', component: JsonifyComponent },
  { path: 'open-stillness-application', component: OpenStillnessComponent },
  {
    path: 'open-stillness-application-phase-2',
    component: OpenStillnessPhase2Component,
  },
  { path: 'figma-pattern-hearts', component: PatternHeartsComponent },
  { path: 'figma-curly-arrows', component: CurlyArrowsComponent },
  { path: 'figma-smiley-express', component: SmileyExpressComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProjectsModule {
  getWebpImage(imagePath: string | undefined): string | undefined {
    if (!imagePath) return undefined;
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}
