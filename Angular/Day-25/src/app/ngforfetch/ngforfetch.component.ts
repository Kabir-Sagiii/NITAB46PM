import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforfetch',
  templateUrl: './ngforfetch.component.html',
  styleUrls: ['./ngforfetch.component.css']
})
export class NgforfetchComponent implements OnInit {

  constructor() { }
Users:any = []
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
MainUsers:any =[]
=======
>>>>>>> 45440dff (updated till 22-07-2022)
=======
>>>>>>> 45440dff (updated till 22-07-2022)
=======
>>>>>>> 45440dff (updated till 22-07-2022)
showUser:boolean = false

  getUsersData(){
       fetch("https://randomuser.me/api/?results=50").then((r)=>{
        console.log(r.json)
          return  r.json()
       }).then((d)=>{
             console.log(d)
             this.Users = d.results
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
             this.MainUsers = d.results
=======
>>>>>>> 45440dff (updated till 22-07-2022)
=======
>>>>>>> 45440dff (updated till 22-07-2022)
=======
>>>>>>> 45440dff (updated till 22-07-2022)
             this.showUser = true
       })
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  
=======
>>>>>>> 45440dff (updated till 22-07-2022)
=======
>>>>>>> 45440dff (updated till 22-07-2022)
=======
>>>>>>> 45440dff (updated till 22-07-2022)
  ngOnInit(): void {
  }

}
