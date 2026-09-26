import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { MenuComponent } from './core/menu/menu.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MenuComponent, FooterComponent],
    templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'portfolio';
}
