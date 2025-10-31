import { Component, OnInit } from '@angular/core';
import { BrandCard } from '../brand-card/brand-card';
import { BrandsService } from '../../services/brands.service';
import { IBrand } from '../../app.model';

@Component({
  selector: 'app-brand-card-list',
  imports: [BrandCard],
  templateUrl: './brand-card-list.html',
  styleUrl: './brand-card-list.scss',
})
export class BrandCardList implements OnInit {
  brands: IBrand[] = [];
  constructor(private brandsService: BrandsService) {}

  ngOnInit(): void {
    this.brandsService.getBrands().subscribe({
      next: (brands: IBrand[]) => {
        console.log('brands = ', brands);
        this.brands = brands;
      },
      error: (err) => {
        console.log('brands = ', err);
      },
    });
  }
}
