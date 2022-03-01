import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { PrescriptionsComponent } from './pages/prescriptions/prescriptions.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'prescriptions', component: PrescriptionsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
