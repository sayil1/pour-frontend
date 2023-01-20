import { Component } from '@angular/core';
import { CreateUserDatumDto, UpdateUserDatumDto, UserDataService } from 'src/core/api/v1/service-api';
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


   user:UpdateUserDatumDto | any = {
   }
  
   userId:any

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

 speakerOfEnglish = [{
    name: 'Very_Well',
    value: 'very well'
}, {
    name: 'Average',
    value: 'average'
}, {
    name: 'Not_At_All',
    value: 'not at all'
}
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
      delete data.data[0].updatedAt
      delete data.data[0].createdAt
      delete data.data[0].deletedAt
      this.userId = data.data[0].id
      this.user = data.data[0]

      console.log(data)
    })
  }

  submit(){
   
  delete this.user.id
    let newUser = Object.fromEntries(Object.entries(this.user).filter(([_, v]) => v != null));
    console.log(newUser)

    this.user_service.update(this.userId, newUser).subscribe((data)=>{
      console.log(data)
    })
  }


}
