import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './presentation/product/product.component';
import {ReviewComponent} from './presentation/review/review.component';


@NgModule({
  declarations: [ProductComponent, ReviewComponent],
  imports: [
    CommonModule
  ]
})
export class ManagementModule {
}
