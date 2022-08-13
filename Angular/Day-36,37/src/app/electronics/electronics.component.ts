import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  electronicDetails:any
  constructor() { }

      getElectronicDetails(){
           fetch("https://fakestoreapi.com/products/category/electronics")
           .then((res)=>{
              return res.json()
           }).then((data)=>{
           this.electronicDetails = data 
           console.log(this.electronicDetails)
           })
      }

  ngOnInit(): void {
       this.getElectronicDetails()
  }

}
