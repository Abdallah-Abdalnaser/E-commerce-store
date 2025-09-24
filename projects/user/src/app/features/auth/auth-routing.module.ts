import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthPageComponent,
    data:{Breadcrumb:"User Account"},
    children:
    [
      {
        path: 'signin',
        component:LoginComponent,
        data:{Breadcrumb:"Sign in"}
      },
      {
        path: 'signup',
        component:SignupComponent,
        data:{Breadcrumb:"Sign up"}
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
