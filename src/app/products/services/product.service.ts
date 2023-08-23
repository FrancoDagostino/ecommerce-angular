import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getGenderProducts(param: string): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.baseUrl}/products?gender=${param}`)
      .pipe(catchError((error) => of([])));
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`).pipe(
      tap((products) => console.log(products)),
      catchError((error) => of([]))
    );
  }

  getProductBySlug(slug: string): Observable<Product[] | undefined> {
    return this.http
      .get<Product[]>(`${this.baseUrl}/products?slug=${slug}`)
      .pipe(
        tap((product) => console.log(product)),
        catchError((error) => of(undefined))
      );
  }
}
