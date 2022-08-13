import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './Github/home/home.component';
import { SearchComponent } from './Github/search/search.component';
import { ProfileComponent } from './Github/profile/profile.component';
import { DetailsComponent } from './Github/details/details.component';
import { NavComponent } from './nav/nav.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { TwowaydbComponent } from './twowaydb/twowaydb.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgIfwiththenelseComponent } from './ng-ifwiththenelse/ng-ifwiththenelse.component';
import { AttbindingComponent } from './attbinding/attbinding.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgforfetchComponent } from './ngforfetch/ngforfetch.component';
import { DropdowntaskComponent } from './dropdowntask/dropdowntask.component';
import { NgswitchdemoComponent } from './ngswitchdemo/ngswitchdemo.component';
import { NgswitchfetchComponent } from './ngswitchfetch/ngswitchfetch.component';
import { NgstylecompComponent } from './ngstylecomp/ngstylecomp.component';
import { NgclasscompComponent } from './ngclasscomp/ngclasscomp.component';
import { ParentCompComponent } from './Parent-Child/parent-comp/parent-comp.component';
import { ChildCompComponent } from './Parent-Child/child-comp/child-comp.component';
import { ClientComponent } from './ChatAppTask/client/client.component';
import { ServerComponent } from './ChatAppTask/server/server.component';
import { MainCompComponent } from './ChatAppTask/main-comp/main-comp.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { JewelaryComponent } from './jewelary/jewelary.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { TDFComponent } from './tdf/tdf.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    SearchComponent,
    ProfileComponent,
    DetailsComponent,
    NavComponent,
    DatabindingComponent,
    TwowaydbComponent,
    NgifComponent,
    NgIfwiththenelseComponent,
    AttbindingComponent,
    NgforComponent,
    NgforfetchComponent,
    DropdowntaskComponent,
    NgswitchdemoComponent,
    NgswitchfetchComponent,
    NgstylecompComponent,
    NgclasscompComponent,
    ParentCompComponent,
    ChildCompComponent,
    ClientComponent,
    ServerComponent,
    MainCompComponent,
    PagenotfoundComponent,
    ProductsComponent,
    ElectronicsComponent,
    JewelaryComponent,
    AComponent,
    BComponent,
    ProductdetailsComponent,
    TDFComponent,
    AngularmaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
