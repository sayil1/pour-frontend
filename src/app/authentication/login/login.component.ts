import { Component } from '@angular/core';
import { UserDataService } from 'src/core/api/v1/service-api';
import decode from 'jwt-decode';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private user_service: UserDataService, public router: Router){

  }

  email?:string
  password?:string;
  message?:""
  loading:boolean = false


  login(){
    this.message = ''
    this.loading = true
    this.user_service.login(this.email, this.password).subscribe((data)=>{
      console.log(data)
      localStorage.setItem('access_token', data.data);
      this.loading = false
      this.message = data.message

      
      const tokenPayload:any = decode(data.data);
      if(tokenPayload?.userType === 'admin'){
        this.router.navigate(['admin'])
      } else if(tokenPayload?.userType === 'regular'){
        this.router.navigate(['user'])
      }
      console.log(tokenPayload)

    })

  }

}
