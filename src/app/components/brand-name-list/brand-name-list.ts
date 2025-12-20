import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BrandsService } from '../../services/brands.service';
import { IBrand } from '../../app.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-brand-name-list',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './brand-name-list.html',
  styleUrl: './brand-name-list.scss',
})
export class BrandNameList {
  brands: IBrand[] = [];
  constructor(private brandsService: BrandsService) {}

  ngOnInit(): void {
    this.brandsService.getBrands().subscribe({
      next: (brands: IBrand[]) => {
        this.brands = brands;
      },
      error: (err) => {
        console.log('brands = ', err);
      },
    });
  }

  @Output() itemClick = new EventEmitter<void>();

  onBrandClick() {
    this.itemClick.emit();
  }
}
