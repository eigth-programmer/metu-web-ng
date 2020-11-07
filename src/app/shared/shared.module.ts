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

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    ShoppingCartComponent
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
    NavbarComponent,
    FooterComponent,
    AboutUsComponent
  ],
  providers: [
    {provide: MatDialogRef, useValue: {}},
  ]
})
export class SharedModule { }
