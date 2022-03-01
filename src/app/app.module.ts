import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { PrescriptionsComponent } from './pages/prescriptions/prescriptions.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsideComponent } from './components/aside/aside.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HomeComponent,
    AppointmentsComponent,
    PrescriptionsComponent,
    MessagesComponent,
    HeaderComponent,
    NavbarComponent,
    AsideComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
