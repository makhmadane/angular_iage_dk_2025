import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from '../models/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private httpClient : HttpClient) { }

  getAllOffres(){
    return  this.httpClient.get<Offre[]>("http://127.0.0.1:8000/api/offres");
  }

  deleteOffre(id : number){
    return this.httpClient.delete("http://127.0.0.1:8000/api/offres/"+id)
  }
}
