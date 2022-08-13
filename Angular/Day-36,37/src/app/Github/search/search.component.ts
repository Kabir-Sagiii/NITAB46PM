import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    userName:string = ''
       @Output() customEvent = new EventEmitter()
  constructor() { }

  getUserDetails() {
      fetch(`https://api.github.com/users/${this.userName}`).then((res)=>{
               return  res.json()
      }).then((actualData)=>{
          console.log(actualData)
            this.customEvent.emit(actualData)
      })
  }

  ngOnInit(): void {
  }

}
