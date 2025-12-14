import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {LoginPage} from './pages/login-page/login-page';
import {RegisterPage} from './pages/register-page/register-page';
import {Dashboard} from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'register',
    component: RegisterPage
  },
  {
    path: 'dashboard',
    component: Dashboard
  }
];
