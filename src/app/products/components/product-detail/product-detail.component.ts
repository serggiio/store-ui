import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductStateFacade } from 'product-lib';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  private _productId: string | null;

  constructor(private route: ActivatedRoute, private _productStateFacade: ProductStateFacade) {
    this._productId = null;
  }

  ngOnInit(): void {
    this._productId = this.route.snapshot.paramMap.get('id');

    if(this._productId) {
      this._productStateFacade.loadProduct(this._productId);
    }
  }
}
