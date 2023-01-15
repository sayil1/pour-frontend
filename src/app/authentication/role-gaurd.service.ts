import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class RoleGaurdService {

  constructor(public auth: AuthServiceService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data['expectedRole'];
    const token:any = localStorage.getItem('token');
    // decode the token to get its payload
    const tokenPayload:any = decode(token);

    console.log(expectedRole)
    if (
      !this.auth.isAuthenticated() || 
      tokenPayload.role !== expectedRole
    ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}


