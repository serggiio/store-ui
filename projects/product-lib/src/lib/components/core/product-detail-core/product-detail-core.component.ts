import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../../models/product.model';
import { ProductStateFacade } from '../../../facades/product.state.facade';

@Component({
  selector: 'lib-product-detail-core',
  templateUrl: './product-detail-core.component.html',
  styleUrls: ['./product-detail-core.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailCoreComponent implements OnInit{
  public product$: Observable<Product | null>;

  constructor(private productStateFacade: ProductStateFacade) {
    this.product$ = of(null);
  }

  ngOnInit(): void {
    this._initializeProducts();
  }

  private _initializeProducts(): void {
    this._selectProductsLoaded();
  }

  private _selectProductsLoaded(): void {
    this.product$ = this.productStateFacade.selectProduct();
  }
}
