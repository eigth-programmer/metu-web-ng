import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from '../store/presentation/home/home.component';
import {NavbarComponent} from '../store/presentation/navbar/navbar.component';
import {FooterComponent} from '../store/presentation/footer/footer.component';
import {AboutUsComponent} from '../store/presentation/about-us/about-us.component';
import {ShoppingCartComponent} from '../store/presentation/shopping-cart/shopping-cart.component';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import {SectionsComponent} from '../store/presentation/sections/sections.component';
import {CoffeeShopComponent} from '../store/presentation/coffee-shop/coffee-shop.component';
import {RecipeShopComponent} from '../store/presentation/recipe-shop/recipe-shop.component';
import {StoreComponent} from '../store/presentation/store/store.component';
import {ProductCardComponent} from '../store/presentation/product-card/product-card.component';
import {RecipeCardComponent} from '../store/presentation/recipe-shop/recipe-card/recipe-card.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ProductMapper} from './entities/product/infrastructure/product-mapper';
import {TaxMapper} from './entities/tax/infrastructure/tax-mapper';
import {OrderMapper} from './entities/order/infrastructure/order-mapper';
import {BillingAddressMapper} from './entities/billing-address/infrastructure/billing-address-mapper';
import {CategoryMapper} from './entities/category/infrastructure/category-mapper';
import {ReviewMapper} from './entities/review/infrastructure/review-mapper';
import {OrderLineMapper} from './entities/order-line/infrastructure/order-line-mapper';
import {NotFoundComponent} from './presentation/not-found/not-found.component';
import {ErrorComponent} from './presentation/error/error.component';
import {ForbiddenComponent} from './presentation/forbidden/forbidden.component';

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
    RecipeCardComponent,
    NotFoundComponent,
    ErrorComponent,
    ForbiddenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
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
    {provide: BillingAddressMapper, useValue: BillingAddressMapper},
    {provide: CategoryMapper, useValue: CategoryMapper},
    {provide: OrderMapper, useValue: OrderMapper},
    {provide: OrderLineMapper, useValue: OrderLineMapper},
    {provide: ProductMapper, useValue: ProductMapper},
    {provide: ReviewMapper, useValue: ReviewMapper},
    {provide: TaxMapper, useValue: TaxMapper},
    {provide: MatDialogRef, useValue: {}},
  ]
})
export class SharedModule { }
