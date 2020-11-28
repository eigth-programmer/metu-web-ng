import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //@TODO configure
  email: string = "oigresanep@gamil.com";
  phone: string = "637209358";
  address: string ="Calle de la piruleta 24";
  linkedin: string = "https://www.linkedin.com/in/sergio-pe%C3%B1a-bayona-297308128/";
  facebook: string = "";
  instagram: string = "";

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.form = this.fb.group({
      email: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onClickSend(){

  }

}
