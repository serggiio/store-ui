import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { GetProductByIdService } from '../services/http-service/GetProductById.service';
import { GetProductsService } from '../services/http-service/GetProducts.service';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpServiceFacade {
  constructor(
    private _getProductsService: GetProductsService,
    private _getProductByIdService: GetProductByIdService
  ) {}

  public loadProducts(): Observable<Product[]> {
    return this._getProductsService.doGet();
  }

  public loadProduct(id: string): Observable<Product> {
    return this._getProductByIdService.doGet(id);
  }
}
