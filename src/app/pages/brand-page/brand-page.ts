import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { BrandsService } from '../../services/brands.service';
import { IBrand } from '../../app.model';
import { BrandNameList } from '../../components/brand-name-list/brand-name-list';

@Component({
  selector: 'app-brand-page',
  imports: [BrandNameList],
  templateUrl: './brand-page.html',
  styleUrl: './brand-page.scss',
})
export class BrandPage implements OnInit {
  brand?: IBrand;

  constructor(
    private route: ActivatedRoute,
    private brandsService: BrandsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id')!;
          return this.brandsService.getBrandById(parseInt(id));
        })
      )
      .subscribe({
        next: (brand) => {
          this.brand = brand;
        },
        error: (error) => {
          console.log('error', error);
        },
      });
  }
}
