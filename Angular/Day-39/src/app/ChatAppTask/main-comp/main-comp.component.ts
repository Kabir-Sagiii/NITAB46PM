import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {
 clientData:string = ''
  constructor() { }

     getDataFromClient(value:any){
   this.clientData = value
  //  alert(this.clientData)
     }

  ngOnInit(): void {
  }

}
