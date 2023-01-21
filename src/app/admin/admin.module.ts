import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminMainComponent } from './admin.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent, AdminMainComponent, AllUsersComponent, CreateUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AdminRoutingModule,
    RouterModule
  ]
})
export class AdminModule { }
