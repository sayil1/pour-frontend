import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { CreateUserDatumDto, UserDataService } from 'src/core/api/v1/service-api';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})

export class CreateUsersComponent {

  levelOfEducation = [
    {
      name: 'Tertiary',
      value: 'tertiary'
    },
    {
      name: 'Secondary',
      value: 'secondary'
    },
    {
      name: 'Primary',
      value: 'primary'
    },
    {
      name: 'Others',
      value: 'others'
    }
  ]

  formOfEducation = [
    {
      name: 'Regular',
      value: 'regular'
    },
    {
      name: 'Arabic',
      value: 'arabic'
    },
    {
      name: 'Nomadic',
      value: 'nomadic'
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

  constructor(private user_service: UserDataService, private notifierService: NotifierService) {

  }

  user: CreateUserDatumDto = {

  }

  error = []
  submitted:boolean = false
  loading:boolean = false


  saveUser() {
    console.log(this.user)
    
    this.user_service.create(this.user).subscribe({
      next:()=>{
    this.notifierService.notify('success', "Created successfully")
      },
      error:()=>{
        this.notifierService.notify('warn', "Created successfully")
      }
    }
    
    )
  }

}
