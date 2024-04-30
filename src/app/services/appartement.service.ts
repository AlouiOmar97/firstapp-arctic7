import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appartement } from '../core/models/appartement';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {
  appartementUrl="http://localhost:3000/appartement/"
  constructor(private http: HttpClient) { }

  getAllAppartements(): Observable<Appartement[]>{
    return this.http.get<Appartement[]>(this.appartementUrl)
  }

  getAppartementById(id: number): Observable<Appartement>{
    return this.http.get<Appartement>(this.appartementUrl+id)
  }

  addAppartement(appartement: Appartement){
    return this.http.post(this.appartementUrl,appartement)
  }

  updateAppartement(id: number, appartement: Appartement){
    return this.http.put(this.appartementUrl+id, appartement)
  }

  deleteAppartement(id: number){
    return this.http.delete(this.appartementUrl+id)
  }
}
