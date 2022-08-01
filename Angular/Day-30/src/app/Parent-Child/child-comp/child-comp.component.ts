import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

   @Input()parentData:string = ''
   //Created Custom event
   @Output() newEvent  = new EventEmitter()

   sendDataToParent(childData:string){
    
    // Triggered Custom Event
     this.newEvent.emit(childData)
   }

  constructor() { }

  ngOnInit(): void {
    
  }

}
