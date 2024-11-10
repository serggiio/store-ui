import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLibModule } from 'product-lib';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductLibModule
  ]
})
export class ProductsModule { }
