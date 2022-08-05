import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { ActivatedRoute } from '@angular/router';

  interface productData {
       id:number,
       title:string
       image:string,
       description:string,
       price:number,
       category:string
  }

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productData:productData = {
       id:0,
       price:0,
       image:'',
       description:'',
       title:'',
       category:''
  } 

  constructor(private products:ProductsService,private activateRoute:ActivatedRoute) { }

     getDataFromService(id:any){
       this.products.getProductInfo(`https://fakestoreapi.com/products/${id}`)
       this.productData = this.products.data  
       console.log("PD",this.productData)
     }

  ngOnInit(): void {
    
        this.getDataFromService(this.activateRoute.snapshot.paramMap.get('id'))
  }

}
