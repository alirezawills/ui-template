import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './services/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: [environment.host]
        // blacklistedRoutes: ['http://example.com/examplebadroute/'],
      },
    }),
    AppRoutingModule,
    AuthModule,
    MainModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 2500,

    })

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
