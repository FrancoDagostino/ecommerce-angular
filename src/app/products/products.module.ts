import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductHomeComponent } from './pages/product-home/product-home.component';
import { ProductKidComponent } from './pages/product-kid/product-kid.component';
import { ProductWomanComponent } from './pages/product-woman/product-woman.component';
import { ProductMenComponent } from './pages/product-men/product-men.component';
import { SharedModule } from '../shared/shared.module';
import { CardProductComponent } from './components/card-product/card-product.component';
import { MaterialModule } from '../material/material.module';
import { ProductImagePipe } from './pipe/product-image.pipe';
import { ProductBySlugComponent } from './pages/product-by-slug/product-by-slug.component';

@NgModule({
  declarations: [
    ProductHomeComponent,
    ProductKidComponent,
    ProductWomanComponent,
    ProductMenComponent,
    CardProductComponent,
    ProductImagePipe,
    ProductBySlugComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, SharedModule, MaterialModule],
})
export class ProductsModule {}
