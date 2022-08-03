import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   userGithubData:any
  constructor() { }

  getDataFromSearchComp(userData:any){
   this.userGithubData = userData
   console.log("Home",this.userGithubData)
  }

  ngOnInit(): void {
  }

}
