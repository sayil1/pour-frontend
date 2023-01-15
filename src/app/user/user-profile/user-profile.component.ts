import { Component } from '@angular/core';
import { CreateUserDatumDto, UserDataService } from 'src/core/api/v1/service-api';
import decode from 'jwt-decode';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor( private user_service: UserDataService,){

  }

  user?:CreateUserDatumDto
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


}
