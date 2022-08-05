import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
res:any 
data:any
       
   async  getProductInfo(api:string){
    this.res   = await fetch(api)
     this.data=    await this.res.json()
    
     

     }

  constructor() { }
}
