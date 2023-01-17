import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environment/environment';
import { counterReducer,} from 'src/store/reducers/users.reducers';
import { BASE_PATH as employments_BASE_PATHG } from '../core/api/v1/service-api';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, AdminModule, AuthenticationModule, UserModule,
    StoreModule.forRoot({ count: counterReducer }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ],
  providers: [
    {
      provide: employments_BASE_PATHG,
      useValue: environment.baseUrlServiceService,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
