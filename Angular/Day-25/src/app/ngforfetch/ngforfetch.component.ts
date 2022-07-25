import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforfetch',
  templateUrl: './ngforfetch.component.html',
  styleUrls: ['./ngforfetch.component.css']
})
export class NgforfetchComponent implements OnInit {

  constructor() { }
Users:any = []
MainUsers:any =[]
showUser:boolean = false

  getUsersData(){
       fetch("https://randomuser.me/api/?results=50").then((r)=>{
        console.log(r.json)
          return  r.json()
       }).then((d)=>{
             console.log(d)
             this.Users = d.results
             this.MainUsers = d.results
             this.showUser = true
       })
  }

  
  ngOnInit(): void {
  }

}
