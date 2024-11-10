import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'lib-product-detail-view',
  templateUrl: './product-detail-view.component.html',
  styleUrls: ['./product-detail-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailViewComponent {
  @Input() product!: Product | null;
}
