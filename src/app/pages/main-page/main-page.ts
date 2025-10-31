import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrandCardList } from '../../components/brand-card-list/brand-card-list';
import { fromEvent, map, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  imports: [BrandCardList],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage implements OnInit, OnDestroy {
  showBrandCardList = true;
  private resizeSub!: Subscription;
  ngOnInit(): void {
    this.resizeSub = fromEvent(window, 'resize')
      .pipe(
        map(() => window.innerWidth),
        startWith(window.innerWidth)
      )
      .subscribe((width) => {
        this.showBrandCardList = width >= 560;
      });
  }

  ngOnDestroy(): void {
    this.resizeSub.unsubscribe();
  }
}
