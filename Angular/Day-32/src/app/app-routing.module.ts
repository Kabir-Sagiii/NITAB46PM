import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Github/home/home.component';
import { MainCompComponent } from './ChatAppTask/main-comp/main-comp.component';
import { NgswitchfetchComponent } from './ngswitchfetch/ngswitchfetch.component';
import { NgforfetchComponent } from './ngforfetch/ngforfetch.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JewelaryComponent } from './jewelary/jewelary.component';

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
    path:'products',
    component:ProductsComponent,
    children:[
      {
        path:'electronics',
        component:ElectronicsComponent
      },{
        path:'jewelary',
        component:JewelaryComponent
      }
    ]
  },
  {
    path:'user',
    component:NgforfetchComponent
  },
  {
    path:'',
    component:MainComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
