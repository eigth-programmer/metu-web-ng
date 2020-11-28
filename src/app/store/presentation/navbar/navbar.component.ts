import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from '../../../auth/presentation/login/login.component';
import {SessionWebService} from '../../../auth/services/session-web.service';
import {login} from '../../../auth/entities/session/application/login';
import {register} from '../../../auth/entities/session/application/register';
import Swal from 'sweetalert2';
import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private service: SessionWebService) { }

  ngOnInit(){
  }

  openLogin(){
    this.dialog
      .open(LoginComponent, {
        width: '1050px',
        height: '650px',
      })
      .afterClosed()
      .subscribe(result => {
        if(result){
          if(result.type ==="login"){
            login(result.username, result.password, this.service)
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
            register(result.nickName, result.username, result.password, this.service)
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
    this.dialog.open(ShoppingCartComponent, {
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
