import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './store/presentation/home/home.component';
import {AboutUsComponent} from './store/presentation/about-us/about-us.component';
import {SectionsComponent} from './store/presentation/sections/sections.component';
import {StoreComponent} from './store/presentation/store/store.component';
import {CoffeeShopComponent} from './store/presentation/coffee-shop/coffee-shop.component';
import {RecipeShopComponent} from './store/presentation/recipe-shop/recipe-shop.component';
import {ManagementGuardService} from './auth/middleware/management-guard.service';
import {AuthGuardService} from './auth/middleware/auth-guard.service';
import {ProductResolverService} from './store/resolvers/product-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: SectionsComponent
      },
      {
        path: 'store',
        component: StoreComponent,
        resolve: {response: ProductResolverService}
      },
      {
        path: 'coffee-shop',
        component:CoffeeShopComponent,
        resolve: {response: ProductResolverService}
      },
      {
        path: 'recipes-shop',
        component: RecipeShopComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      }
    ]
  },
  {
    path: 'management',
    loadChildren: () => import('./management/management.module').then(m => m.ManagementModule),
    canActivate: [AuthGuardService, ManagementGuardService],
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
