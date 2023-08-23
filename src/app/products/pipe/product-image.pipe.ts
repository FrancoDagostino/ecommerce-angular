import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {
  transform(product: Product): string {
    if (!product.slug && !product.images) {
      return 'assets/no-image.png';
    }
    return `assets/products/${product.images[0]}`;
  }
}
