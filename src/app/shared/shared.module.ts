import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopLayoutComponent } from './components/shop-layout/shop-layout.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';

@NgModule({
  declarations: [ShopLayoutComponent, ContadorComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ShopLayoutComponent, ContadorComponent],
})
export class SharedModule {}
