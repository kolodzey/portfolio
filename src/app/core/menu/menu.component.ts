import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-menu',
    imports: [CommonModule, RouterModule],
    templateUrl: 'menu.component.html',
    styleUrl: 'menu.component.scss'
})
export class MenuComponent implements OnInit {
  menuOpen = false;

  menuItems: { label: string; link: string }[] = [
    { label: 'Projects', link: '/projects' },
    { label: 'Expertise', link: '/expertise' },
    { label: 'Blog', link: '/blog' },
    { label: 'About', link: '/about' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to route changes and update menu state
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd));
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }

  closeMenuAndNavigate(): void {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll'); // Re-enable scrolling
  }
}
