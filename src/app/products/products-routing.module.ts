import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './pages/product-home/product-home.component';
import { ProductKidComponent } from './pages/product-kid/product-kid.component';
import { ProductWomanComponent } from './pages/product-woman/product-woman.component';
import { ProductMenComponent } from './pages/product-men/product-men.component';
import { ProductBySlugComponent } from './pages/product-by-slug/product-by-slug.component';

const routes: Routes = [
  {
    path: '',
    component: ProductHomeComponent,
    children: [
      { path: 'kid', component: ProductKidComponent },
      { path: 'woman', component: ProductWomanComponent },
      { path: 'men', component: ProductMenComponent },
      { path: ':slug', component: ProductBySlugComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
