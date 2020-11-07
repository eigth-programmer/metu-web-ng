import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/presentation/home/home.component';
import { AboutUsComponent } from './shared/presentation/about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then(mod => mod.StoreModule)
  },
  {
    path: 'coffee-shop',
    loadChildren: () => import('./coffeeshop/coffeeshop.module').then(mod => mod.CoffeeshopModule)
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
