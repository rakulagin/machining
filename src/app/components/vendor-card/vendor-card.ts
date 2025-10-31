import { Component, Input } from '@angular/core';
import { IBrand } from '../../app.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vendor-card',
  imports: [RouterLink],
  templateUrl: './vendor-card.html',
  styleUrl: './vendor-card.scss',
})
export class VendorCard {
  @Input() brand!: IBrand;
}
