import { Component, OnInit } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {

  residencesList: Residence[]=[ 

    {id: 1, name: "Residence 1", address: "Address 1", image:"image 1"}, 

    {id: 1, name: "Residence 2", address: "Address 2", image:"image 2"}, 

    {id: 1, name: "Residence 3", address: "Address 3", image:"image 3"} 

  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
