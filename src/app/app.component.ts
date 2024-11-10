import { Component, OnInit } from '@angular/core';
import { ProductStateFacade } from 'product-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'store-ui';

  constructor(private _productStateFacade: ProductStateFacade) {}

  ngOnInit(): void {
    this._productStateFacade.loadProducts();
  }
}
