import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

const JWThelper = new JwtHelperService();
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.apiUrl + 'account/';
  constructor(private http: HttpClient) {}

  login(model: any) {
    const result = this.http.post(this.baseUrl + 'login', model).pipe(
      map((resp: any) => {
        if (resp.rec.rsl) {
          localStorage.setItem('token', resp.token);
          const token = localStorage.getItem('token');
          console.log(JWThelper.decodeToken(token));
        }
        return resp;
      })
    );
    return result;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
