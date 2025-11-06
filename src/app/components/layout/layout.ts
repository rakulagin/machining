import { Component } from '@angular/core';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { ArrayDataSource } from '@angular/cdk/collections';
import { BrandNameList } from '../brand-name-list/brand-name-list';

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
  constructor(private router: Router) {}
  isCatalogsActive(): boolean {
    return this.router.url.startsWith('/main/') && this.router.url !== '/main';
  }
}
