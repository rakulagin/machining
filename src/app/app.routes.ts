import { Routes } from '@angular/router';
import { MainPage } from './pages/main-page/main-page';
import { Layout } from './components/layout/layout';
import { AboutPage } from './pages/about-page/about-page';
import { ContactsPage } from './pages/contacts-page/contacts-page';
import { BrandPage } from './pages/brand-page/brand-page';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'main', component: MainPage, title: 'Главная' },

      {
        path: 'catalog',
        children: [
          { path: '', redirectTo: '1', pathMatch: 'full' },
          { path: ':id', component: BrandPage, title: 'Каталог' },
        ],
      },

      { path: 'about', component: AboutPage, title: 'О нас' },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
    ],
  },
];
