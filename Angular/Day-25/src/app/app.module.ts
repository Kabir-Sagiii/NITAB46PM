import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

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
    NgforfetchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
<<<<<<< HEAD:Angular/Day-25/src/app/app.module.ts
    
=======
>>>>>>> 05437bef (updated till 20-07-2022):Angular/Day-21/src/app/app.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
