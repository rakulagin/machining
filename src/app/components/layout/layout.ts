import { Component, effect, signal } from '@angular/core';
import { Header } from '../header/header';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { ArrayDataSource } from '@angular/cdk/collections';
import { BrandNameList } from '../brand-name-list/brand-name-list';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [
    Header,
    RouterOutlet,
    Footer,
    MatSidenavModule,
    RouterLink,
    RouterLinkActive,
    CdkAccordionModule,
    CdkTreeModule,
    MatIconModule,
    BrandNameList,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  isCatalogsExpanded = signal(false);
  currentUrl = signal('');

  constructor(private router: Router) {
    this.currentUrl.set(this.router.url);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl.set(event.url);
      });

    effect(() => {
      this.isCatalogsExpanded.set(this.currentUrl().startsWith('/catalog'));
    });
  }
  isCatalogsActive(): boolean {
    // return this.router.url.startsWith('/catalog/');
    return this.currentUrl().startsWith('/catalog');
  }

  toggleCatalogs() {
    this.isCatalogsExpanded.set(!this.isCatalogsExpanded());
  }
}
