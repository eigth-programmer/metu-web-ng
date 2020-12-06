import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from '../../../auth/presentation/login/login.component';
import {SessionService} from '../../../auth/services/session.service';
import Swal from 'sweetalert2';
import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component';
import {SessionFacade} from '../../../auth/facades/session-facade';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _dialog: MatDialog,
    private _service: SessionService,
    private _facade: SessionFacade) {
  }

  ngOnInit(){
  }

  openLogin(){
    this._dialog
      .open(LoginComponent, {
        width: '1050px',
        height: '650px',
      })
      .afterClosed()
      .subscribe(result => {
        if(result){
          if(result.type ==="login"){
            this._facade.login(null)
              .subscribe(res => {

              }, error => {
                console.error('error on login', error);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Algo ha salido mal, no se pudo acceder!',
                })
              });
          } else if(result.type ==="register"){
            this._facade.register(null)
              .subscribe(res => {

              }, error => {
                console.error('error on login', error);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Algo ha salido mal, no se pudo completar el registro!',
                })
              })
          }
        }
      }, error => {
        console.error('error on login dialog', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo ha salido mal!',
        })
      })
  }

  openShoppingCart(){
    this._dialog.open(ShoppingCartComponent, {
      width: '1050px',
      height: '650px',
    })
      .afterClosed()
      .subscribe(result => {

      }, error => {
        console.error('error on shopping cart dialog', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo ha salido mal!',
        })
      })
  }
}
