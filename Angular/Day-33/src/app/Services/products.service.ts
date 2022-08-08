import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
res:any 
data:any
       
  //  async  getProductInfo(api:string):Promise<any>{
  //   this.res   = await fetch(api)
  //    this.data=    await this.res.json()
  //    return this.data
    
     

  //    }
  getProductInfo(api:string):any{
    return fetch(api)
   
    
     

     }

  constructor() { }
}
