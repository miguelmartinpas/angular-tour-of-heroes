import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from 'components/heroes/heroes.component';
import { HeroDetailComponent } from 'components/hero-detail/hero-detail.component';
import { MessagesComponent } from 'components/messages/messages.component';
import { DashboardComponent } from 'components/dashboard/dashboard.component';
import { AppRoutingModule } from 'routes/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*

10238  ng new angular-tour-of-heroes
10239  cd angular-tour-of-heroes
10240  cd ../angular-tour-of-heroes
10241  ng serve
10242  ng generate component heroes
10243  ng generate component hero-detail
10244  cd ../angular-tour-of-heroes
10245  ng serve
10246  cd ../angular-tour-of-heroes
10247  ng generate service hero
10248  ng generate component messages
10249  ng generate service message
10250  ng generate module app-routing --flat --module=app
10251  ng generate component dashboard

*/
