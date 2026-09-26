import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-menu',
    imports: [CommonModule, RouterModule],
    templateUrl: 'menu.component.html',
    styleUrl: 'menu.component.scss'
})
export class MenuComponent {
  @ViewChild('menuToggle') menuToggle!: ElementRef<HTMLButtonElement>;
  @ViewChild('navMenu') navMenu!: ElementRef<HTMLUListElement>;

  menuOpen = false;

  menuItems: { label: string; link: string }[] = [
    { label: 'Projects', link: '/projects' },
    { label: 'Expertise', link: '/expertise' },
    { label: 'Blog', link: '/blog' },
    { label: 'About', link: '/about' },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);

    if (this.menuOpen) {
      setTimeout(() => {
        if (this.menuOpen) {
          this.navMenu.nativeElement.querySelector('a')?.focus();
        }
      });
    } else {
      this.menuToggle.nativeElement.focus();
    }
  }

  @HostListener('document:keydown.escape')
  closeMenuOnEscape(): void {
    if (this.menuOpen) {
      this.menuOpen = false;
      document.body.classList.remove('no-scroll');
      this.menuToggle.nativeElement.focus();
    }
  }

  closeMenuAndNavigate(): void {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll'); // Re-enable scrolling
  }
}
