import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() { }

      @Output() clientEvent = new EventEmitter()

        getData(data:any){
           this.clientEvent.emit(data.value)
           data.value = ""
        }

  ngOnInit(): void {
  }

}
