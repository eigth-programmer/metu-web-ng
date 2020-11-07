import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './presentation/home/home.component';
import { NavbarComponent } from './presentation/navbar/navbar.component';
import { FooterComponent } from './presentation/footer/footer.component';
import { AboutUsComponent } from './presentation/about-us/about-us.component';
import { ShoppingCartComponent } from './presentation/shopping-cart/shopping-cart.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from  '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { SectionsComponent } from './presentation/sections/sections.component';
import { CoffeeShopComponent } from './presentation/coffee-shop/coffee-shop.component';
import { RecipeShopComponent } from './presentation/recipe-shop/recipe-shop.component';
import { StoreComponent } from './presentation/store/store.component';
import { ProductCardComponent } from './presentation/product-card/product-card.component';
import { RecipeCardComponent } from './presentation/recipe-card/recipe-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    ShoppingCartComponent,
    SectionsComponent,
    CoffeeShopComponent,
    RecipeShopComponent,
    StoreComponent,
    ProductCardComponent,
    RecipeCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    AboutUsComponent,
    ShoppingCartComponent,
    SectionsComponent,
    CoffeeShopComponent,
    RecipeShopComponent,
    StoreComponent
  ],
  providers: [
    {provide: MatDialogRef, useValue: {}},
  ]
})
export class SharedModule { }
