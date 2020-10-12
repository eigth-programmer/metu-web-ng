import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './presentation/home/home.component';
import { NavbarComponent } from './presentation/navbar/navbar.component';
import { FooterComponent } from './presentation/footer/footer.component';
import { AboutUsComponent } from './presentation/about-us/about-us.component';



@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent, AboutUsComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, NavbarComponent, FooterComponent, AboutUsComponent]
})
export class SharedModule { }
