import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AppModule } from 'src/app/app.module';



@NgModule({
  declarations: [
    AdminprofileComponent,
    AdminusersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppModule
  ],
  exports:[AdminusersComponent],
  bootstrap:[AdminprofileComponent]
})
export class AdminModule { }
