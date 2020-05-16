import { Component, OnInit } from '@angular/core';

import { LoginModel } from '../../models/loginModel';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginModel: LoginModel;
model: any = {};
  constructor(private authService: AuthService, private toastr: ToastrService, private route: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      if (next.rec.rsl)
      {
        this.toastr.success(next.rec.message, '');
        this.route.navigate(['/main']);
        return;
      }
      this.toastr.error(next.rec.message, '');
      return;

      console.log(next);

    });
  }
}
