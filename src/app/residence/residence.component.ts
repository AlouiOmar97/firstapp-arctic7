import { Component, OnInit } from '@angular/core';
import { Residence } from '../core/models/residence';
import { Appartement } from '../core/models/appartement';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {
  searchSurface!: number
  selectedResidence!: number
  selectedAppartements!: Appartement[]
  residencesList: Residence[]=[ 

    {id: 1, name: "Residence 1", address: "Address 1", image:"image 1"}, 

    {id: 2, name: "Residence 2", address: "Address 2", image:"image 2"}, 

    {id: 3, name: "Residence 3", address: "Address 3", image:"image 3"} 

  ] 

  appartementsList: Appartement[]= [ 

    {id: 1, terrasse: "Terrasse 1", numAppart: 18, numEtage: 0, surface: 500, surfaceTerrasse: 250, category: "category 1", description: "appartement desc 1", status: true ,residence: this.residencesList[0]}, 

    {id: 2, terrasse: "Terrasse 2", numAppart: 21, numEtage: 5, surface: 250, surfaceTerrasse: 250, category: "category 2", description: "appartement desc 2", status: false ,residence: this.residencesList[0]}, 

    {id: 3, terrasse: "Terrasse 3", numAppart: 16, numEtage: 8, surface: 300, surfaceTerrasse: 250, category: "category 3", description: "appartement desc 3", status: true ,residence: this.residencesList[0]}, 

    {id: 4, terrasse: "Terrasse 4", numAppart: 16, numEtage: 8, surface: 600, surfaceTerrasse: 250, category: "category 4", description: "appartement desc 4", status: true ,residence: this.residencesList[1]}, 

    {id: 5, terrasse: "Terrasse 5", numAppart: 16, numEtage: 8, surface: 100, surfaceTerrasse: 250, category: "category 5", description: "appartement desc 5", status: true ,residence: this.residencesList[1]}, 

    {id: 6, terrasse: "Terrasse 6", numAppart: 16, numEtage: 8, surface: 420, surfaceTerrasse: 260, category: "category 6", description: "appartement desc 6", status: true ,residence: this.residencesList[2]}, 
  ] 

  displaySelectedAppartements(){    
    let appList: Appartement[]=[];
    for (let i = 0; i < this.appartementsList.length; i++) {
        if (this.appartementsList[i].residence.id == this.selectedResidence) {
          appList.push(this.appartementsList[i])
        }      
    }
    this.selectedAppartements=appList;    
  }

  buyAppartement(id: number){
    for (let i = 0; i < this.appartementsList.length; i++) {
        if (this.appartementsList[i].id == id) {
          this.appartementsList[i].status=false
        }      
    }
  }

  constructor(private residenceService: ResidenceService) { }

  ngOnInit(): void {
    this.residenceService.getAllResidences().subscribe((data)=>{
      this.residencesList= data
    })
  }

}
