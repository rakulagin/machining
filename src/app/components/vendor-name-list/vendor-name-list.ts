import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { IBrand } from '../../app.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vendor-name-list',
  imports: [RouterLink],
  templateUrl: './vendor-name-list.html',
  styleUrl: './vendor-name-list.scss',
})
export class VendorNameList {
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
