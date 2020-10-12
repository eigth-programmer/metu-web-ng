import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './presentation/home/home.component';
import { NavbarComponent } from './presentation/navbar/navbar.component';
import { FooterComponent } from './presentation/footer/footer.component';



@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, NavbarComponent, FooterComponent]
})
export class SharedModule { }
