import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './presentation/login/login.component';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TokenMapper } from './entities/session/infrastructure/token-mapper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
    imports: [
      CommonModule,
      RouterModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ],
  exports : [LoginComponent],
  providers: [
    TokenMapper
  ]
})
export class AuthModule { }
