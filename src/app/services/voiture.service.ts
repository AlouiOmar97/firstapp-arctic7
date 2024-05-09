import { Injectable } from '@angular/core';
import { Voiture } from '../core/models/voiture';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  voitureUrl="http://localhost:3000/voiture/"
  constructor(private http: HttpClient) { }
  
  getAllVoitures(): Observable<Voiture[]>{
    return this.http.get<Voiture[]>(this.voitureUrl)
  }

  getVoitureById(id: number): Observable<Voiture>{
    return this.http.get<Voiture>(this.voitureUrl+id)
  }

  addVoiture(voiture: Voiture){
    return this.http.post(this.voitureUrl,voiture)
  }

  updateVoiture(id: number, voiture: Voiture){
    return this.http.put(this.voitureUrl+id, voiture)
  }

  deleteVoiture(id: number){
    return this.http.delete(this.voitureUrl+id)
  }
}
