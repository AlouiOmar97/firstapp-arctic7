import { Component, OnInit } from '@angular/core';
import { AppartementService } from '../services/appartement.service';
import { Appartement } from '../core/models/appartement';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent implements OnInit {
  appartementList!: Appartement[]
  constructor(private appartementService: AppartementService) { }

  ngOnInit(): void {
    console.log('Lancement de ngOnInit');
    
    this.appartementService.getAllAppartements().subscribe((data)=>{
      this.appartementList= data
      console.log("sum num surface   : "+this.appartementService.getSameValueOf(this.appartementList,"surface",420));

      
    })


  }

  deleteAppartement(id: number){
    this.appartementService.deleteAppartement(id).subscribe(()=>{
      console.log("appartement deleted");
      this.appartementService.getAllAppartements().subscribe((data)=>{
        this.appartementList= data
      })
    })
  }

}
