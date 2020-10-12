import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './presentation/shop/shop.component';
import { routing } from './coffeeshop-routing.module';


@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class CoffeeshopModule { }
