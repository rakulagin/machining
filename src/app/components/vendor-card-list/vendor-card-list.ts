import { Component, OnInit } from '@angular/core';
import { VendorCard } from '../vendor-card/vendor-card';
import { BrandsService } from '../../services/brands.service';
import { IBrand } from '../../app.model';

@Component({
  selector: 'app-vendor-card-list',
  imports: [VendorCard],
  templateUrl: './vendor-card-list.html',
  styleUrl: './vendor-card-list.scss',
})
export class VendorCardList implements OnInit {
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
