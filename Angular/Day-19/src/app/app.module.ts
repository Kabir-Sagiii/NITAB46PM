import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
