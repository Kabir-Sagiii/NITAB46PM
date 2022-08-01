import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    @Input() userData:any
  constructor() { }

  ngOnInit(): void {
  }

}
