import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydb',
  templateUrl: './twowaydb.component.html',
  styleUrls: ['./twowaydb.component.css']
})
export class TwowaydbComponent implements OnInit {

    inputContent:string = ''
    
    name:string=''
    city:string=''
    gender:string =''

    

  constructor() { }

  ngOnInit(): void {
  }

}
