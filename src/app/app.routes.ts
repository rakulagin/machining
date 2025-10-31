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
      { path: 'about', component: AboutPage, title: 'О нас' },
      { path: 'contacts', component: ContactsPage, title: 'Контакты' },
      { path: 'main/:id', component: BrandPage },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
    ],
  },
];
