import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jewelary',
  templateUrl: './jewelary.component.html',
  styleUrls: ['./jewelary.component.css']
})
export class JewelaryComponent implements OnInit {
jewelaryDetails:any
  constructor() { }

   getJewelaryDetails(){
           fetch("https://fakestoreapi.com/products/category/jewelery")
           .then((res)=>{
              return res.json()
           }).then((data)=>{
           this.jewelaryDetails = data 
           console.log(this.jewelaryDetails)
           })
      }

  ngOnInit(): void {
    this.getJewelaryDetails()
  }

}
