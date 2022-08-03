import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Github/home/home.component';
import { MainCompComponent } from './ChatAppTask/main-comp/main-comp.component';
import { NgswitchfetchComponent } from './ngswitchfetch/ngswitchfetch.component';
import { NgforfetchComponent } from './ngforfetch/ngforfetch.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'github',
    component:HomeComponent
  },
  {
    path:'chat',
    component:MainCompComponent
  },
  {
    path:'switch',
    component:NgswitchfetchComponent
  },
  {
    path:'user',
    component:NgforfetchComponent
  },
  {
    path:'',
    component:MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
