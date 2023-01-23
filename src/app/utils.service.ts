import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) {

  }


   headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin' :"*"
  }
  
   requestOptions:any = {                                                                                                                                                                                 
    headers: new Headers(this.headerDict), 
  };

  getStates(): Observable<any> {
    return this.http.get('https://api.facts.ng/v1/states', this.requestOptions)
  }

  getLgs(id: string): Observable<any> {
    return this.http.get(`https://api.facts.ng/v1/states/${id}`)
  }
}
