import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ui-webprj';
  url = '../assets/js/app.js';
  loadApi: any;
  constructor(){}
  ngOnInit(){
this.loadApi = new Promise(() => {
  this.loadScript();
});

}

public loadScript(){
  const node = document.createElement('script');
  node.src = this.url;
  node.type = 'text/javascript';
  node.async = true;
  // tslint:disable-next-line: deprecation
  node.charset = 'utf-8';
  document.getElementsByTagName('head')[0].appendChild(node);
  }
}

