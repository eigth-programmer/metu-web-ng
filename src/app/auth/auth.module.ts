import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './presentation/login/login.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {TokenMapper} from './entities/session/infrastructure/token-mapper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {AdminMapper} from './entities/admin/infrastructure/admin-mapper';
import {ClientMapper} from './entities/client/infrastructure/client-mapper';
import {SessionFacade} from './facades/session-facade';
import {AdminFacade} from './facades/admin-facade';
import {ClientFacade} from './facades/client-facade';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    LoginComponent,
  ],
  providers: [
    TokenMapper,
    AdminMapper,
    ClientMapper,

    SessionFacade,
    AdminFacade,
    ClientFacade
  ]
})
export class AuthModule {
}
