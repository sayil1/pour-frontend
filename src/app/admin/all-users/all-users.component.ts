import { Component } from '@angular/core';
import { UpdateUserDatumDto, UserDataService } from 'src/core/api/v1/service-api';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  constructor(private user_service: UserDataService,) { }
  usersList?: UpdateUserDatumDto[]


  ngOnInit() {
    this.fetchUsers()
  }

  calculateAge(date: Date) {
    if(date){
      var timeDiff = Math.abs(Date.now() - new Date(date).getTime());
      return `${Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25)} Years` ;
    } else {
      return ""
    }

  }

  fetchUsers() {
    this.user_service.findAll(100, 0, undefined, undefined).subscribe((data) => {
      console.log(data)
      this.usersList = data.data.list
    })
  }

  updateData(data: any) {
    console.log(data)
  }

  delete(data: any) {

    if (confirm(`You are about to delete ${data.name || data.fname}'s data`) == true) {
      this.user_service.remove(data.id).subscribe((data) => {
        console.log(data)
        this.fetchUsers()
      })
    } else {

    }

  }
}
