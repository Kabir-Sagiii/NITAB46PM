import {Component,OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'

 @Component({
    selector:'app-footer',
    templateUrl:'./footer.component.html',
    styleUrls:['./footer.component.css','./footer2.component.css']
 })
  export class FooterComponent implements OnInit {
   res:any 
   data:any
   cssS:any = {
      color:'red'
   }
   constructor(private activedRoute:ActivatedRoute){

   }
     getData(inputRef:any){
     this.cssS = {
      color:'blue'
     }
       
     }
     async getProductData(id:any){
         this.res =await fetch(`https://fakestoreapi.com/products/${id}`)
         this.data = await this.res.json() 
         console.log(this.data)
       }
     ngOnInit(): void {
       alert(this.activedRoute.snapshot.paramMap.get('id'))
  }

   
  }
