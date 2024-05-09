import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Appartement } from '../core/models/appartement';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-appartement-card',
  templateUrl: './appartement-card.component.html',
  styleUrls: ['./appartement-card.component.css']
})
export class AppartementCardComponent implements OnInit {
  residence: Residence={
    "id": 1,
    "name": "Residence 1 json",
    "address": "Address 1",
    "image": "https://www.seniortransition.fr/wp-content/uploads/2021/02/residence-senior-les-jardins-darcadie-le-mans.jpg"
  }
  @Input()
  appartement: Appartement={
    id:0,
    surface:0,
    numAppart:0,
    numEtage:0,
    terrasse:"",
    surfaceTerrasse:0,
    category:"",
    description:"",
    residence: this.residence,
    status:false
  }
  @Output()
  deleteC=new EventEmitter<Appartement>()
  childText="text from child"

  childMethod(){
    this.childText="child text modifed"
  }
  constructor() { }

  ngOnInit(): void {
  }
  deleteChild(){
    console.log("delete from child");
    this.deleteC.emit(this.appartement)
  }
}
