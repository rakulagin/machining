import { Component } from '@angular/core';
import { VendorCardList } from '../../components/vendor-card-list/vendor-card-list';

@Component({
  selector: 'app-main-page',
  imports: [VendorCardList],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
