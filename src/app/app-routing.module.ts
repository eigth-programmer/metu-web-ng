import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/presentation/home/home.component';
import { AboutUsComponent } from './shared/presentation/about-us/about-us.component';
import {SectionsComponent} from './shared/presentation/sections/sections.component';
import {StoreComponent} from './shared/presentation/store/store.component';
import {CoffeeShopComponent} from './shared/presentation/coffee-shop/coffee-shop.component';
import {RecipeShopComponent} from './shared/presentation/recipe-shop/recipe-shop.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: SectionsComponent
      },
      {
        path: 'store',
        component: StoreComponent
      },
      {
        path: 'coffee-shop',
        component:CoffeeShopComponent,
      },
      {
        path: 'recipes',
        component: RecipeShopComponent
      }
    ]
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
