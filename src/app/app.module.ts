import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AnnonceModule } from './annonce/annonce.module';
import { AddAppartementComponent } from './add-appartement/add-appartement.component';
import { HttpClientModule } from '@angular/common/http';
import { AppartementComponent } from './appartement/appartement.component';
import { AppartementDetailsComponent } from './appartement-details/appartement-details.component';
import { UpdateAppartementComponent } from './update-appartement/update-appartement.component';
import { AppartementCardComponent } from './appartement-card/appartement-card.component';
import { VoitureComponent } from './voiture/voiture.component';
import { VoitureDetailsComponent } from './voiture-details/voiture-details.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ResidenceComponent,
    HomeComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    AddAppartementComponent,
    AppartementComponent,
    AppartementDetailsComponent,
    UpdateAppartementComponent,
    AppartementCardComponent,
    VoitureComponent,
    VoitureDetailsComponent,
    AddVoitureComponent,
    UpdateVoitureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AnnonceModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
