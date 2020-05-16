import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-leftSidemenu',
  templateUrl: './leftSidemenu.component.html',
  styleUrls: ['./leftSidemenu.component.css'],
})
export class LeftSidemenuComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: Router,
    private alertService: ToastrService
  ) {}

  url = '../assets/js/app.js';
  loadApi: any;

  ngOnInit() {
    this.loadApi = new Promise(() => {
      this.loadScript();
    });
  }

  public loadScript() {
    const node = document.createElement('script');
    node.src = this.url;
    node.type = 'text/javascript';
    node.async = true;
    // tslint:disable-next-line: deprecation
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  logout() {
    this.authService.logout();
    this.alertService.warning('خروج از سیستم');
    this.route.navigate(['login']);
  }
}
