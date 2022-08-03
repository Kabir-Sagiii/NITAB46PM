import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowntask',
  templateUrl: './dropdowntask.component.html',
  styleUrls: ['./dropdowntask.component.css']
})
export class DropdowntaskComponent implements OnInit {

  fontSizeValue:string ='font3'
  fontColor:string =''

  changeFont(event:any){
    this.fontSizeValue = event.target.value

  }
  changeColor(event:any){
    this.fontColor = event.target.value

  }

  constructor() { }

  ngOnInit(): void {
  }

}
