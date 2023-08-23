import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'card-product',
  templateUrl: './card-product.component.html',
  styles: [],
})
export class CardProductComponent {
  @Input()
  public product!: Product;
}
