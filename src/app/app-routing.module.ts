import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guard/auth.guard';
import { UserlistingComponent } from './components/userlisting/userlisting.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  { component: HomeComponent, path: '', canActivate: [authGuard] },
  { component: LoginComponent, path: 'login' },
  { component: RegisterComponent, path: 'register' },
  { component: UserlistingComponent, path: 'user', canActivate: [authGuard] },
  // {component:UserComponent,path:'user',canActivate:[AuthGuard]},
  { component: CustomerComponent, path: 'customer', canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
