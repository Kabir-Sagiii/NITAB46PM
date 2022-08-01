import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

      username:string;
      @Input() userData:any

  constructor() { 
    this.username = "Rahul Patil"
  }

  ngOnInit(): void {
  }

}
