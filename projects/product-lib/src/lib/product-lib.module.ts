import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productReducer } from './state/reducers/product.reducer';
import { ProductListCoreComponent } from './components/core/product-list-core/product-list-core.component';
import { ProductListViewComponent } from './components/view/product-list-view/product-list-view.component';
import { ProductEffects } from './state/effects/product.effects';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductDetailCoreComponent } from './components/core/product-detail-core/product-detail-core.component';
import { ProductDetailViewComponent } from './components/view/product-detail-view/product-detail-view.component';
import { ProductDescriptionViewComponent } from './components/view/product-description-view/product-description-view.component';

@NgModule({
  declarations: [
    ProductListCoreComponent,
    ProductListViewComponent,
    ProductDetailCoreComponent,
    ProductDetailViewComponent,
    ProductDescriptionViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }),
    HttpClientModule,
  ],
  exports: [
    ProductListCoreComponent,
    ProductListViewComponent,
    ProductDetailCoreComponent,
    ProductDetailViewComponent,
    ProductDescriptionViewComponent
  ],
})
export class ProductLibModule {}
