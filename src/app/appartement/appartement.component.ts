import { Component, OnInit, ViewChild } from '@angular/core';
import { AppartementService } from '../services/appartement.service';
import { Appartement } from '../core/models/appartement';
import { AppartementCardComponent } from '../appartement-card/appartement-card.component';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent implements OnInit {
  @ViewChild(AppartementCardComponent)
  private appartementCardDComponent!: AppartementCardComponent
  parentText="parent Text"
  appartementList!: Appartement[]
  constructor(private appartementService: AppartementService) { }

  ngOnInit(): void {
    console.log('Lancement de ngOnInit');
    
    this.appartementService.getAllAppartements().subscribe((data)=>{
      this.appartementList= data
      console.log("sum num surface   : "+this.appartementService.getSameValueOf(this.appartementList,"surface",420));

      
    })


  }

  parentMethod(){
    this.parentText= this.appartementCardDComponent.childText + " called from parent"
    this.appartementCardDComponent.childMethod()
  }

  deleteAppartement(appart: Appartement){
    this.appartementService.deleteAppartement(appart.id).subscribe(()=>{
      console.log("appartement deleted");
      this.appartementService.getAllAppartements().subscribe((data)=>{
        this.appartementList= data
      })
    })
  }

}
