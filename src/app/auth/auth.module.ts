import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './presentation/login/login.component';
import { RegisterComponent } from './presentation/register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule
  ],
  exports : [LoginComponent, RegisterComponent]
})
export class AuthModule { }
