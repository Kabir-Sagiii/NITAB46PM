import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforfetch',
  templateUrl: './ngforfetch.component.html',
  styleUrls: ['./ngforfetch.component.css']
})
export class NgforfetchComponent  {

  constructor() { }
Users:any = []
MainData:any = []
showUser:boolean = false

  getUsersData(){
       fetch("https://randomuser.me/api/?results=50").then((r)=>{
        console.log(r.json)
          return  r.json()
       }).then((d)=>{
             console.log(d)
             this.Users = d.results
             this.MainData = d.results
             this.showUser = true
       })
  }

    filterData(radioValue:string){
        if(radioValue === 'male'){
            this.Users = this.MainData.filter(function(ele:any){
                    return ele.gender === 'male'
            })

        } else if(radioValue === 'female'){
           this.Users=    this.MainData.filter(function(ele:any){
                    return    ele.gender === 'female'
               })
        } else {
          this.Users = this.MainData
        }

    }

  
  

}
