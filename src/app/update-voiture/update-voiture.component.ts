import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Voiture } from '../core/models/voiture';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrls: ['./update-voiture.component.css']
})
export class UpdateVoitureComponent implements OnInit {

  id!: number
  voiture: Voiture={
    id:0,
    marque:"",
    date:0,
   }
  updateVoitureForm!: FormGroup
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.params['id']
    this.voitureService.getVoitureById(this.id).subscribe((data)=>{
      this.voiture= data
      this.updateVoitureForm= new FormGroup({
        marque: new FormControl(this.voiture.marque,[Validators.required,Validators.minLength(3),Validators.pattern('^[a-z]+')]),
        date:  new FormControl(this.voiture.date,Validators.required),
      })
    })
    
  }
  get marque(){return this.updateVoitureForm.get('marque')}
  get date(){return this.updateVoitureForm.get('date')}

  updateVoiture(){
    console.log("update voiture");
    this.voitureService.updateVoiture(this.id, this.updateVoitureForm.value).subscribe(()=>{
      console.log('voiture updateed');
      this.router.navigateByUrl('/voiture')
    })
    
  }



}
