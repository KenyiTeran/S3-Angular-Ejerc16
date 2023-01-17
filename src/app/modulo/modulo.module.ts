import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertusComponent } from './certus/certus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CertusComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],exports: [
    CertusComponent,
    HomeComponent,
    LoginComponent
  ]

})
export class ModuloModule { }
