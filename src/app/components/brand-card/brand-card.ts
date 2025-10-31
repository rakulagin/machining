import { Component, Input } from '@angular/core';
import { IBrand } from '../../app.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brand-card',
  imports: [RouterLink],
  templateUrl: './brand-card.html',
  styleUrl: './brand-card.scss',
})
export class BrandCard {
  @Input() brand!: IBrand;
}
