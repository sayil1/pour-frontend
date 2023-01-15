import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UpdateUserDatumDto, UserDataService } from 'src/core/api/v1/service-api';
import { decrement, increment, reset } from 'src/store/actions/users.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  statics? :{male:string, female:string, total:string}
  usersList?: UpdateUserDatumDto[]

  count$?: Observable<any>
 
  constructor(private store: Store<{ count: {} }>,     private user_service: UserDataService,
    ) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');

  }

  
  ngOnInit() {
    this.fetchStats()
    this.fetchUsers()
  }

  fetchStats(){
    this.user_service.stats('2020-12-12', '2040-12-12', ).subscribe((data)=>{
      console.log(data)
      this.statics = data
    })
  }

  fetchUsers(){
    this.user_service.findAll(100, 0, undefined, undefined).subscribe((data)=>{
      console.log(data)
      this.usersList = data.data.list
    })
  }


 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

}
