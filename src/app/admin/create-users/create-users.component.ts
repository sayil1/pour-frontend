import { Component } from '@angular/core';
import { CreateUserDatumDto } from 'src/core/api/v1/service-api';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent {

  constructor(){

  }

  user:CreateUserDatumDto = {

  }


  saveUser(){
    console.log(this.user)
  }

}
