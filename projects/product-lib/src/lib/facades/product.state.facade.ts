import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductState } from '../state/reducers/product.reducer';
import * as ProductActions from '../state/actions/product.actions';
import { Observable } from 'rxjs';
import {
  getSelectedProduct,
  selectAllProducts,
} from '../state/selectors/product.selector';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductStateFacade {
  constructor(private store: Store<ProductState>) {}

  public loadProducts(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }

  public loadProduct(id: string): void {
    this.store.dispatch(ProductActions.loadProduct({ id }));
  }

  public selectProducts(): Observable<Product[]> {
    return this.store.select(selectAllProducts);
  }

  public selectProduct(): Observable<Product | null> {
    return this.store.select(getSelectedProduct);
  }
}
