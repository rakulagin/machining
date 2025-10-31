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
  selector: 'app-brand-name-list',
  imports: [RouterLink],
  templateUrl: './brand-name-list.html',
  styleUrl: './brand-name-list.scss',
})
export class BrandNameList {
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
