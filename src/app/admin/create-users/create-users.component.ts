import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { UtilsService } from 'src/app/utils.service';
import { CreateUserDatumDto, UserDataService } from 'src/core/api/v1/service-api';
// import NaijaStates from 'naija-state-local-government';
import { states } from '../../generalData/stateAndLga'



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

  constructor(private user_service: UserDataService, private notifierService: NotifierService, private utilService: UtilsService) { }

  user: CreateUserDatumDto = {

  }

  error = []
  submitted: boolean = false
  loading: boolean = false
  states = states
  selectedUserStateLgas?: any 
  selectedNextOfKinStateLgas?: any 



  ngOnInit() {
    console.log(states)
  }


  selectUserState(e: any) {
    let state = this.states.find((data)=> data.state === e )
    this.selectedUserStateLgas = state?.lgas
  }

  selectNextOfKinState(e: any) {
   
    let state = this.states.find((data)=> data.state === e )
    console.log(state)
    this.selectedNextOfKinStateLgas = state?.lgas  }

  saveUser() {
    console.log(this.user)

    this.user_service.create(this.user).subscribe({
      next: () => {
        this.notifierService.notify('success', "Created successfully")
      },
      error: () => {
        this.notifierService.notify('warn', "error")
      }
    }

    )
  }

}
