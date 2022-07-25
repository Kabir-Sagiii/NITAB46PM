import {Component} from '@angular/core'

 @Component({
    selector:'app-footer',
    templateUrl:'./footer.component.html',
    styleUrls:['./footer.component.css','./footer2.component.css']
 })
  export class FooterComponent {
     fontValue:string = ''
     colorValue:string = ''
   changeFont(event:any){
        this.fontValue = event.target.value

   }
   changeColor(value:any){
this.colorValue = value.target.value
   }
   
  }
