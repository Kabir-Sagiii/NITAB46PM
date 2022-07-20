import {Component} from '@angular/core'

 @Component({
    selector:'app-footer',
    templateUrl:'./footer.component.html',
    styleUrls:['./footer.component.css','./footer2.component.css']
 })
  export class FooterComponent {

      show:string = 'angular'
     name:string = ''
     email:string = ''
     phone:number =0
     gender:string = ''
      brand:string = 'Apple'

  }