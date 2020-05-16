import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private alertService: ToastrService, private rout: Router) { }
model: any = {};

  ngOnInit() {
  }
  register(){
    this.registerService.register(this.model).subscribe(next => {
      if (next.rsl)
      {
this.alertService.success(next.message);
this.rout.navigate(['/login']);
return;
      }
      this.alertService.error(next.message);

    });
  }

}
