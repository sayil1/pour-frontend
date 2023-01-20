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

  fetchUsers() {
    this.user_service.findAll(100, 0, undefined, undefined).subscribe((data) => {
      console.log(data)
      this.usersList = data.data.list
    })
  }

  updateData(data:any){
   console.log(data)
  }
}
