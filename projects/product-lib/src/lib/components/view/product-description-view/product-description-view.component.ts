import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { Comment } from '../../../models/comment.model,';

@Component({
  selector: 'lib-product-description-view',
  templateUrl: './product-description-view.component.html',
  styleUrls: ['./product-description-view.component.css']
})
export class ProductDescriptionViewComponent {
  @Input() product!: Product | null;

  public trackIndex(index: number, product: Comment): number {
    return product.id;
  }
}
