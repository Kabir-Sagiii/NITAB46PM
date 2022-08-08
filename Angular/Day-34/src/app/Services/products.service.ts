import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
res:any 
data:any
       
   getProductInfo(api:string){
    return fetch(api)
    
}
 

  constructor() { }
}
