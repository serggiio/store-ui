import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);

export const selectProduct = createAction(
  '[Product] Select Product',
  props<{ id: string }>()
);

export const loadProduct = createAction(
  '[Product] Load Product',
  props<{ id: string }>()
);

export const loadProductSuccess = createAction(
  '[Product] Load Product Success',
  props<{ product: Product }>()
);

export const loadProductFailure = createAction(
  '[Product] Load Product Failure',
  props<{ error: any }>()
);