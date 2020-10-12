import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './presentation/store/store.component';
import { routing } from './store-routing.module';


@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class StoreModule { }
