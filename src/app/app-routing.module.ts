import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';

const routes: Routes= [
  { path:"", redirectTo:"home", pathMatch:"full"},
  { path:"home", component:HomeComponent},
  { path:"residence", component:ResidenceComponent},
  { path:"residence/details/:id", component:ResidenceDetailsComponent},
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
