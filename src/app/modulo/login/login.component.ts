import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup

  constructor(private formbuilder: FormBuilder) {
    this.loginForm = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    rememberMe: [false]
    });
    }

    get email(){ return this.loginForm.get('email'); }
    get password(){ return this.loginForm.get('password'); }

    alert:boolean = false

    onSubmit(){
      this.alert = !this.alert
    }
}
