import { Component, OnInit } from '@angular/core';
import { Appartement } from '../core/models/appartement';
import { Residence } from '../core/models/residence';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogService } from '../services/log.service';
import { AppartementService } from '../services/appartement.service';

@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html',
  styleUrls: ['./add-appartement.component.css']
})
export class AddAppartementComponent implements OnInit {
  residence: Residence={
    "id": 1,
    "name": "Residence 1 json",
    "address": "Address 1",
    "image": "https://www.seniortransition.fr/wp-content/uploads/2021/02/residence-senior-les-jardins-darcadie-le-mans.jpg"
  }
  appartement: Appartement={
    id:0,
    surface:0,
    numAppart:0,
    numEtage:0,
    terrasse:"",
    surfaceTerrasse:0,
    category:"",
    description:"",
    residence: this.residence,
    status:false
  }
  addAppartementForm!: FormGroup
  constructor(private router: Router, private logService: LogService, private appartementService: AppartementService) { }

  ngOnInit(): void {
    this.addAppartementForm= new FormGroup({
      category: new FormControl(this.appartement.category,[Validators.required,Validators.minLength(3),Validators.pattern('^[a-z]+')]),
      surface:  new FormControl(this.appartement.surface,Validators.required),
      residence: new FormControl(this.appartement.residence)
    })
  }
  get category(){return this.addAppartementForm.get('category')}
  get surface(){return this.addAppartementForm.get('surface')}

  addAppartement(){
    console.log("add appartement");
    //console.log(this.addAppartementForm.value.category);
    this.logService.log(this.addAppartementForm.value)
    this.appartementService.addAppartement(this.addAppartementForm.value).subscribe(()=>{
      console.log('appartement added');
      this.router.navigateByUrl('/appartement')
    })
    /*this.logService.warn(this.addAppartementForm.value.category)
    this.logService.error(this.addAppartementForm.value.category)*/
    
  }
}
