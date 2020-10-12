import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ShopComponent } from './presentation/shop/shop.component';


export const routes: Routes = [
  {
    path: '',
    component: ShopComponent
  }
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);
