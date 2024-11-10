import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState, adapter } from '../reducers/product.reducer';

export const selectProductState =
  createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  adapter.getSelectors().selectAll
);

export const getSelectedProduct = createSelector(
  selectProductState,
  (state: ProductState) => state.selectedProduct
);
