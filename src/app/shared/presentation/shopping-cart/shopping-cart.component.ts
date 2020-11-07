import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<ShoppingCartComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(){
  }

}
