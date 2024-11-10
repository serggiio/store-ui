import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class GetProductsService extends BaseHttpService {
  
  constructor(http: HttpClient) {
    super(http, 'https://fakestoreapi.com/products');
  }

  doGet(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.uri}`);
  }
}
