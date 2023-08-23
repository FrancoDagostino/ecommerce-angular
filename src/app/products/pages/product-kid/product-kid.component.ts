import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-kid',
  templateUrl: './product-kid.component.html',
  styleUrls: ['./product-kid.component.css'],
})
export class ProductKidComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productService
      .getGenderProducts('kid')
      .subscribe((products) => (this.products = products));
  }
}
