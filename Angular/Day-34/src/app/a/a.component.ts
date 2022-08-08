import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
   productdata:any
  constructor( private products:ProductsService) { }

     getDataFromService(){
  //  this.productdata= this.products.getProductInfo()
   console.log("A Component",this.productdata)
     }

  ngOnInit(): void {
    this.getDataFromService()
  }

}
