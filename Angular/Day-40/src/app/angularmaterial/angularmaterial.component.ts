import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainCompComponent } from '../ChatAppTask/main-comp/main-comp.component';
import { MydialogcompComponent } from '../mydialogcomp/mydialogcomp.component';

@Component({
  selector: 'app-angularmaterial',
  templateUrl: './angularmaterial.component.html',
  styleUrls: ['./angularmaterial.component.css']
})
export class AngularmaterialComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  openDialog(enterAnimationDuration:string,exitAnimationDuration:string) {
      this.dialog.open(MydialogcompComponent,{
        width:"500px",
        enterAnimationDuration,
        exitAnimationDuration
      })
  }

  ngOnInit(): void {
  }

}
