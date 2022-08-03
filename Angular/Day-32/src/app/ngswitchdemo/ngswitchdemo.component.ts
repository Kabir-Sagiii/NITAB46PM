import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchdemo',
  templateUrl: './ngswitchdemo.component.html',
  styleUrls: ['./ngswitchdemo.component.css']
})
export class NgswitchdemoComponent implements OnInit {
   techName:string = 'default'
  constructor() { }
  changeTech(event:any){

this.techName = event.target.value
  }

  ngOnInit(): void {
  }

}
