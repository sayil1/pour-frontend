import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminMainComponent {

  constructor(public router: Router,){

  }


  logout(){
    localStorage.clear();
    this.router.navigate(['/'])
  }
}
