import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'lib-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListViewComponent {
  @Input() products: Product[] = [];

  public trackIndex(index: number, product: Product): number {
    return product.id;
  }
}
