import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './admin.component';
import { AdminComponent } from './admin/admin.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CreateUsersComponent } from './create-users/create-users.component';

const routes: Routes = [  {
  path: '',
  component: AdminMainComponent,
  children: [
    { path: 'main', component:AdminComponent},
    { path: 'users', component:AllUsersComponent},
    { path: 'new-user', component:CreateUsersComponent},


  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
