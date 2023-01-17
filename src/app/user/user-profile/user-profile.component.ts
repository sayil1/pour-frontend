import { Component } from '@angular/core';
import { CreateUserDatumDto, UserDataService } from 'src/core/api/v1/service-api';
import decode from 'jwt-decode';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor( private user_service: UserDataService,){

  }


   user:CreateUserDatumDto = {
  
   }

   levelOfEducation = [
    {
      name:'Tertiary',
      value:'tertiary'
    },
    {
      name:'Secondary',
      value:'secondary'
    },
    {
      name:'Primary',
      value:'primary'
    },
    {
      name:'Others',
      value:'others'
    }
   ]

   formOfEducation = [
    {
      name:'Regular',
      value:'regular'
    },
    {
      name:'Arabic',
      value:'arabic'
    },
    {
      name:'Nomadic',
      value:'nomadic'
    },
   ]

   age?:string
  ngOnInit() {
    this.decodeUser()
  }

  decodeUser(){
    let token:any =localStorage.getItem('access_token')
    const tokenPayload:any = decode(token);
    this.fetchUser(tokenPayload.email)

  }
  fetchUser(email:string){
    this.user_service.findOne(undefined, email).subscribe((data)=>{
      this.user = data.data[0]
      console.log(data)
    })
  }

  submit(){
    console.log(this.user)
  }


}
