import {Component} from '@angular/core'

 @Component({
    selector:'app-footer',
    templateUrl:'./footer.component.html',
    styleUrls:['./footer.component.css','./footer2.component.css']
 })
  export class FooterComponent {
   cssS:any = {
      color:'red'
   }
     getData(inputRef:any){
     this.cssS = {
      color:'blue'
     }
     }
   
  }
