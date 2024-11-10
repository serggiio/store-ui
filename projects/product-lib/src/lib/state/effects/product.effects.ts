import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import * as ProductActions from '../actions/product.actions';
import { ProductHttpServiceFacade } from '../../facades/product.http.service.facade';
import { CommentHttpServiceFacade } from '../../facades/comment.http.service.facade';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() => {
        return this._productHttpServiceFacade.loadProducts().pipe(
          map((products) => ProductActions.loadProductsSuccess({ products })),
          catchError((error) =>
            of(ProductActions.loadProductsFailure({ error }))
          )
        );
      })
    )
  );

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProduct),
      mergeMap((action) =>
        forkJoin({
          product: this._productHttpServiceFacade.loadProduct(action.id),
          comments: this._commentHttpServiceFacade.loadComments(action.id),
        }).pipe(
          map(({ product, comments }) => {
            product.comments = comments.comments;
            return ProductActions.loadProductSuccess({ product });
          }),
          catchError((error) =>
            of(ProductActions.loadProductFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private _productHttpServiceFacade: ProductHttpServiceFacade,
    private _commentHttpServiceFacade: CommentHttpServiceFacade
  ) {}
}
