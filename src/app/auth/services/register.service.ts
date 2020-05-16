import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Toast } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
baseUrl = environment.apiUrl + 'account/';
constructor(private http: HttpClient

  ) { }

register(model: any){
  return this.http.post(this.baseUrl + 'register', model).pipe(
    map((resp: any) => {
     return resp;
    })
  );
}
}
