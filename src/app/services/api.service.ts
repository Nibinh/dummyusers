import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

baseUrl:string='https://dummyjson.com/users'

  constructor(private http:HttpClient) { }

apiCall(){
  return this.http.get(this.baseUrl)
}

}

