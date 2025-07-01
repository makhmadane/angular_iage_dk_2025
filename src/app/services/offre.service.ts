import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from '../models/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private URL ="http://127.0.0.1:8000/api/offres/"
  constructor(private httpClient : HttpClient) { }

  getAllOffres(){
    return  this.httpClient.get<Offre[]>(this.URL);
  }

  deleteOffre(id : number){
    return this.httpClient.delete(this.URL+id)
  }

  saveOffre(offre : Offre){
    return this.httpClient.post(this.URL,offre);
  }
}
