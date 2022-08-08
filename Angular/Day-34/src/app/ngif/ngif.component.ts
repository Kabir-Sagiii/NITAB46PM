import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  showDiv:boolean = true

    show:boolean = true

  constructor() { }

    addDiv(){
         this.showDiv = true
    }

    removeDiv(){
      this.showDiv = false
    }

  ngOnInit(): void {
  }

}
