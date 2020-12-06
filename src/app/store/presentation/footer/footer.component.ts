import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {config} from '../../config/config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //@TODO configure
  email: string = config.email;
  phone: string = config.phone;
  address: string = config.address;
  linkedin: string = config.linkedin;
  facebook: string = config.facebook;
  instagram: string = config.instagram;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onClickSend(){

  }

}
