import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from '../core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http: HttpClient) { }

  getAllResidences(): Observable<Residence[]>{
    return this.http.get<Residence[]>("http://localhost:3000/residence")
  }
}
