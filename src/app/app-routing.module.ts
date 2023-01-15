import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  AuthGaurdService as AuthGuard 
} from './authentication/auth-gaurd.service'

const routes: Routes = [{
  path: 'admin',
  loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule),
  canActivate: [AuthGuard] 
},
{
  path: 'user',
  loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule),
  canActivate: [AuthGuard] 
},
{
  path: '',
  loadChildren: () => import('./authentication/authentication-routing.module').then(m => m.AuthenticationRoutingModule)
},
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
