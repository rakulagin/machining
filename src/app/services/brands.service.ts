import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IBrand } from '../app.model';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  constructor(private http: HttpClient) {}

  getBrands(): Observable<IBrand[]> {
    return this.http.get<IBrand[]>('assets/brands.json');
  }

  getBrandById(id: number): Observable<IBrand | undefined> {
    return this.getBrands().pipe(
      map((brands: IBrand[]) => brands.find((brand: IBrand) => brand.id === id))
    );
  }
}
