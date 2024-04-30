import { Component, OnInit } from '@angular/core';
import { Appartement } from '../core/models/appartement';
import { Residence } from '../core/models/residence';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from '../services/log.service';
import { AppartementService } from '../services/appartement.service';

@Component({
  selector: 'app-update-appartement',
  templateUrl: './update-appartement.component.html',
  styleUrls: ['./update-appartement.component.css']
})
export class UpdateAppartementComponent implements OnInit {

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
    category:"a",
    description:"",
    residence: this.residence,
    status:false
  }
  updateAppartementForm!: FormGroup
  id!: number
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private logService: LogService, private appartementService: AppartementService) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.params['id']
    this.appartementService.getAppartementById(this.id).subscribe((data)=>{
      this.appartement= data
      console.log(data);
      console.log("inside 1");
      this.updateAppartementForm= new FormGroup({
        category: new FormControl(this.appartement.category,[Validators.required,Validators.minLength(3),Validators.pattern('^[a-z]+')]),
        surface:  new FormControl(this.appartement.surface,Validators.required),
        residence: new FormControl(this.appartement.residence)
      })
    })
    console.log("outside 2");
    
    
  }
  get category(){return this.updateAppartementForm.get('category')}
  get surface(){return this.updateAppartementForm.get('surface')}

  updateAppartement(){
    console.log("update appartement");
    //console.log(this.updateAppartementForm.value.category);
    this.logService.log(this.updateAppartementForm.value)
    this.appartementService.updateAppartement(this.id,this.updateAppartementForm.value).subscribe(()=>{
      console.log('appartement updated');
      this.router.navigateByUrl('/appartement')
    })
    /*this.logService.warn(this.updateAppartementForm.value.category)
    this.logService.error(this.updateAppartementForm.value.category)*/
    
  }

}
