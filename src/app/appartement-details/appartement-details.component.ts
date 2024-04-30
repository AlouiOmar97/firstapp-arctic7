import { Component, OnInit } from '@angular/core';
import { Appartement } from '../core/models/appartement';
import { ActivatedRoute } from '@angular/router';
import { AppartementService } from '../services/appartement.service';

@Component({
  selector: 'app-appartement-details',
  templateUrl: './appartement-details.component.html',
  styleUrls: ['./appartement-details.component.css']
})
export class AppartementDetailsComponent implements OnInit {
  appartement!: Appartement
  id!: number
  constructor(private activatedRoute: ActivatedRoute, private appartementService: AppartementService) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot);
    
    this.id= this.activatedRoute.snapshot.params['id']
    this.appartementService.getAppartementById(this.id).subscribe((data)=>{
      this.appartement= data
      console.log(data);
      
    })
  }

}
