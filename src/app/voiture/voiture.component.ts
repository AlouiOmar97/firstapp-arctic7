import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../services/voiture.service';
import { Voiture } from '../core/models/voiture';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  voitureList!: Voiture[]
  constructor(private vS: VoitureService) { }

  ngOnInit(): void {
    this.vS.getAllVoitures().subscribe((data)=>{
      this.voitureList= data
    })
  }

  deleteVoiture(id: number){
    this.vS.deleteVoiture(id).subscribe(()=>{
      console.log("voiture deleted")
      this.vS.getAllVoitures().subscribe((data)=>{
        this.voitureList= data
      })
    })
  }

}
