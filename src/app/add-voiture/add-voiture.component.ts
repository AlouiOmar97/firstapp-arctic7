import { Component, OnInit } from '@angular/core';
import { Voiture } from '../core/models/voiture';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {

  voiture: Voiture={
    id:0,
    marque:"",
    date:0,
   }
  addVoitureForm!: FormGroup
  constructor(private router: Router, private voitureService: VoitureService) { }

  ngOnInit(): void {
    this.addVoitureForm= new FormGroup({
      marque: new FormControl(this.voiture.marque,[Validators.required,Validators.minLength(3),Validators.pattern('^[a-z]+')]),
      date:  new FormControl(this.voiture.date,Validators.required),
    })
  }
  get marque(){return this.addVoitureForm.get('marque')}
  get date(){return this.addVoitureForm.get('date')}

  addVoiture(){
    console.log("add voiture");
    this.voitureService.addVoiture(this.addVoitureForm.value).subscribe(()=>{
      console.log('voiture added');
      this.router.navigateByUrl('/voiture')
    })
    
  }


}
