import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  showLogin: boolean = true;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      nickName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    })
  }

  onLogin() {
    if(this.loginForm.valid){
      const username = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;

      this.dialogRef.close({
        username: username,
        password: password,
        type: 'login'})
    }
  }

  onRegister(){
    if(this.loginForm.valid){
      const username = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;
      const nickName = this.loginForm.get('nickName').value;

      this.dialogRef.close({
        username: username,
        password: password,
        nickName: nickName,
        type: 'register'})
    }
  }

}
