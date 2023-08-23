import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-shop-layout',
  templateUrl: './shop-layout.component.html',
  styleUrls: ['./shop-layout.component.css'],
})
export class ShopLayoutComponent {
  constructor(private router: Router) {}
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: 'list' },
    { label: 'Agregar', icon: 'add', url: 'new-hero' },
    { label: 'Buscar', icon: 'search', url: 'search' },
  ];
}
