import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { BrandsService } from '../../services/brands.service';
import { IBrand } from '../../app.model';
import { VendorNameList } from '../../components/vendor-name-list/vendor-name-list';

@Component({
  selector: 'app-vendor-page',
  imports: [VendorNameList],
  templateUrl: './vendor-page.html',
  styleUrl: './vendor-page.scss',
})
export class VendorPage implements OnInit {
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
          console.log('brand', brand);
          this.brand = brand;
        },
        error: (error) => {
          console.log('error', error);
        },
      });
  }
}
