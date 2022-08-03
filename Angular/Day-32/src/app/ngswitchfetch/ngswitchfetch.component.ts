import { Component, OnInit } from '@angular/core';

interface IProduct {
   id:number,
   title:string,
   category:string,
   image:string,
   description:string,
   rating:any
   price:number
}

@Component({
  selector: 'app-ngswitchfetch',
  templateUrl: './ngswitchfetch.component.html',
  styleUrls: ['./ngswitchfetch.component.css']
})
export class NgswitchfetchComponent implements OnInit {
  productValue:string = 'basic'
 productDetails:IProduct = {
    id:0,
    title:'',
    price:0,
    image:'',
    description:'',
    category:'',
    rating:{
      rate:0,
      count:0
    }
 }
  constructor() { }

  changeProductValue(value:string){
this.productValue = value
  }

    getProductDetails(){
       fetch("https://fakestoreapi.com/products/5").then((res)=>{
             return  res.json()
       }).then((actualData)=>{
        console.log(actualData)
            this.productDetails = actualData 
       })
    }

  ngOnInit(): void {
     this.getProductDetails()
  }

}
