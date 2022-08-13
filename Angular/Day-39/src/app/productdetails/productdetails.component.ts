import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { ActivatedRoute } from '@angular/router';

  interface productData {
       id:number,
       title:string
       image:string,
       description:string,
       price:number,
       category:string,
       rating:{
        rate:string,
        count:string
       }
  }

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
 res:any
  productData:productData = {
       id:0,
       price:0,
       image:'',
       description:'',
       title:'',
       category:'',
       rating:{
        rate:'',
        count:''
       }
  } 

  constructor(private products:ProductsService,private activateRoute:ActivatedRoute) { }

     async getDataFromService(id:any){
    this.res  = await this.products.getProductInfo(`https://fakestoreapi.com/products/${id}`)
      this.productData  = await this.res.json()
    } 

  ngOnInit(): void {
    
        this.getDataFromService(this.activateRoute.snapshot.paramMap.get('id'))
  }

}
