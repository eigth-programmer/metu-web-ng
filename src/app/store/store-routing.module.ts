import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { StoreComponent } from './presentation/store/store.component';

export const routes: Routes = [
  {
    path: '',
    component: StoreComponent
  }
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);
