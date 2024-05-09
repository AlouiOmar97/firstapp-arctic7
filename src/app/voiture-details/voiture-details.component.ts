import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voiture } from '../core/models/voiture';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-voiture-details',
  templateUrl: './voiture-details.component.html',
  styleUrls: ['./voiture-details.component.css']
})
export class VoitureDetailsComponent implements OnInit {
  id!: number
  voiture!: Voiture
  constructor(private aR: ActivatedRoute, private vS: VoitureService) { }

  ngOnInit(): void {
    this.id= this.aR.snapshot.params['id']
    this.vS.getVoitureById(this.id).subscribe((data)=>{
      this.voiture= data
    })
  }

}
