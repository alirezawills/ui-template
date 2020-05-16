import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RegisterService } from './services/register.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,


  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  providers: [
RegisterService
      ]
})
export class AuthModule { }
