import { createReducer, on } from '@ngrx/store';
import { Product } from '../../models/product.model';
import * as ProductActions from '../actions/product.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface ProductState extends EntityState<Product> {
  products: Product[];
  selectedProduct: Product | null;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductState = adapter.getInitialState({
  products: [],
  selectedProduct: null,
});

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, { products }) =>
    adapter.setAll(products, state)
  ),
  on(ProductActions.loadProductSuccess, (state, { product }) => {
    return adapter.upsertOne(product, {
      ...state,
      selectedProduct: product,
    });
  }),
  on(ProductActions.loadProductFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
