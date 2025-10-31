import { Component } from '@angular/core';
import { BrandCardList } from '../../components/brand-card-list/brand-card-list';

@Component({
  selector: 'app-main-page',
  imports: [BrandCardList],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
