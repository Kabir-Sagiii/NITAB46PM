import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attbinding',
  templateUrl: './attbinding.component.html',
  styleUrls: ['./attbinding.component.css']
})
export class AttbindingComponent implements OnInit {
  colspanValue:number = 2
  constructor() { }

  ngOnInit(): void {
  }

}
