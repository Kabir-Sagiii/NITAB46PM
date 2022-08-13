import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    userName:string = ''
  constructor() { }

  getUserDetails() {
      fetch(`https://api.github.com/users/${this.userName}`).then((res)=>{
               return  res.json()
      }).then((actualData)=>{
          console.log(actualData)
      })
  }

  ngOnInit(): void {
  }

}
