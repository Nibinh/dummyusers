import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-dummymanager',
  templateUrl: './dummymanager.component.html',
  styleUrls: ['./dummymanager.component.css']
})
export class DummymanagerComponent implements OnInit{

  allContacts:any
  

  constructor(private api:ApiService){}

  ngOnInit(){
    this.api.apiCall()
    .subscribe((data:any)=>{
      console.log(data.users)
      this.allContacts=data.users
    })
  }

  


}
