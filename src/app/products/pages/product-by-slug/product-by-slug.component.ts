import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product-by-slug',
  templateUrl: './product-by-slug.component.html',
  styleUrls: ['./product-by-slug.component.css'],
})
export class ProductBySlugComponent implements OnInit {
  public product?: Product[];
  public count: number = 0;
  constructor(
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(switchMap(({ slug }) => this.productService.getProductBySlug(slug)))
      .subscribe((product) => {
        if (!product) return this.router.navigateByUrl('/products/kids');
        return (this.product = product);
      });
  }

  onContadorChange(contador: number) {
    this.count = contador;
  }
}
