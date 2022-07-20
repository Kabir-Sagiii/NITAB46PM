import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
   wishMsg:string = 'Welcome to Angular'
   inputType:string = 'password'
   btnText:string = 'Show Password'

  productDetails:any = {
    image:"https://th.bing.com/th/id/OIP.nQUN3bgTRV8TbQ1k8y0GKAHaEK?pid=ImgDet&rs=1",
    pname:"Macbook Air",
    price:238000,
    qty:7,
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eum accusamus vitae doloribus, aut et sapiente nulla unde officia,architecto sed quibusdam repellat. In autem magni illo? Et, magnam",
   
  }

  changeInputTypeValue(){
       if(this.inputType === 'password') {
        this.inputType = 'text'
        this.btnText = "Hide Password"
       } else {
        this.inputType = 'password'
        this.btnText = "Show Password"
       }
  }

    changeMsg(message:string):void{
      this.wishMsg = message
    }

  constructor() { }

  ngOnInit(): void {
  }

}
