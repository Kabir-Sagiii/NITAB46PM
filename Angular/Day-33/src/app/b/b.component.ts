import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private products:ProductsService) { }

  ngOnInit(): void {
      //  this.products.getProductInfo()
  }

}
