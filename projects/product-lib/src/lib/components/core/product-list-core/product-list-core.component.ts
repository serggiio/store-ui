import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { Observable, of } from 'rxjs';
import { ProductStateFacade } from '../../../facades/product.state.facade';

@Component({
  selector: 'lib-product-list-core',
  templateUrl: './product-list-core.component.html',
  styleUrls: ['./product-list-core.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListCoreComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(private productStateFacade: ProductStateFacade) {
    this.products$ = of([]);
  }

  ngOnInit(): void {
    this._initializeProducts();
  }

  public setSelectedProductId(): void {
    console.warn('TODO -> set productId');
  }

  private _initializeProducts(): void {
    this._selectProductsLoaded();
  }

  private _selectProductsLoaded(): void {
    this.products$ = this.productStateFacade.selectProducts();
  }
}
