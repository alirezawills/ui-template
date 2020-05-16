import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContentPageComponent } from './main/components/contentPage/contentPage.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        component: ContentPageComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  { path: 'main', redirectTo: '/main', pathMatch: 'full' },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'login', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'register', redirectTo: '/auth/register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
