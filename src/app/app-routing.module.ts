import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AddAppartementComponent } from './add-appartement/add-appartement.component';
import { AppartementComponent } from './appartement/appartement.component';
import { AppartementDetailsComponent } from './appartement-details/appartement-details.component';
import { UpdateAppartementComponent } from './update-appartement/update-appartement.component';
import { VoitureComponent } from './voiture/voiture.component';
import { VoitureDetailsComponent } from './voiture-details/voiture-details.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';

const routes: Routes= [
  { path:"", redirectTo:"home", pathMatch:"full"},
  { path:"home", component:HomeComponent},
  { path:"voiture", component:VoitureComponent},
  { path:"voiture/add", component:AddVoitureComponent},
  { path:"voiture/update/:id", component:UpdateVoitureComponent},
  { path:"voiture/details/:id", component:VoitureDetailsComponent},
  { path:"residence", component:ResidenceComponent},
  { path:"residence/details/:id", component:ResidenceDetailsComponent},
  { path:'appartement', component:AppartementComponent},
  { path:'appartement/update/:id', component:UpdateAppartementComponent},
  { path:'appartement/details/:id', component:AppartementDetailsComponent},
  { path:"appartement/add", component:AddAppartementComponent},
  { path:"**", component:NotFoundComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
