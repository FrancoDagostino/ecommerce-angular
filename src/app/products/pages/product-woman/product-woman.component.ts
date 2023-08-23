import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-woman',
  templateUrl: './product-woman.component.html',
  styleUrls: ['./product-woman.component.css'],
})
export class ProductWomanComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productService
      .getGenderProducts('women')
      .subscribe((products) => (this.products = products));
  }
}
