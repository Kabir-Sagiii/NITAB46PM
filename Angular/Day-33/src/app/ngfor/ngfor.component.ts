import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

   products:string[] = ["Iphone 13","Iphone 12","Oneplus 9pro","Vivo A23","OnePlus 10","Macbook Air"]
   users:any = [
    {
    name:"S1",
    city:"C1"
   },{
     name:"S2",
    city:"C2"
   },{
     name:"S3",
    city:"C3"
   },{
     name:"S4",
    city:"C4"
   },{
     name:"S5",
    city:"C6"
   }]

  constructor() { }

  ngOnInit(): void {
  }

}
