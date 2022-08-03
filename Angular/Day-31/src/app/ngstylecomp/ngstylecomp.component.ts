import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstylecomp',
  templateUrl: './ngstylecomp.component.html',
  styleUrls: ['./ngstylecomp.component.css']
})
export class NgstylecompComponent implements OnInit {

  style1:any = {
    "color":'white',
   "background-color":'orange'

  }
  changeStyle(value:string){
     if(value === 'style1'){
   this.style1 ={
    "color":'white',
   "background-color":'darkred'
   }
  } else {
     this.style1 ={
    "color":'white',
   "background-color":'darkgreen'
   }
  }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
