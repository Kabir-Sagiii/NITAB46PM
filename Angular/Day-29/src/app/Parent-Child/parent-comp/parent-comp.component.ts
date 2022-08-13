import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {
   data:string = ''
  sendDataToChild(input:any) {
  //  alert(input.value)

  this.data = input.value

  }

  constructor() { }

  ngOnInit(): void {
  }

}
