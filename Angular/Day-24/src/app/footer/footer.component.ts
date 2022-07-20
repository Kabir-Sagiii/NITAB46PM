import {Component} from '@angular/core'

 @Component({
    selector:'app-footer',
    templateUrl:'./footer.component.html',
    styleUrls:['./footer.component.css','./footer2.component.css']
 })
  export class FooterComponent {
      data:any = [{name:"Sagar"},{name:"Sagar 2"},{name:"Sagar 3"},{name:"Sagar 4"}]
   d:boolean = false
   colspanValue:number = 2
   customstyles:any = ['fontsize1','fontfamily1']
   

   
  }
