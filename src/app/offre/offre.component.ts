import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Offre } from '../models/offre';
import { OffreService } from '../services/offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrl: './offre.component.css'
})
export class OffreComponent implements OnInit {
  offres :Offre[] = [];
  constructor(private offreService : OffreService){

  }

  //constructor
  ngOnInit(): void {
    this.getAllOffres();
  }

  getAllOffres(){
     this.offreService.getAllOffres().subscribe(
        (data : Offre[])=>{
          this.offres = data;
          console.log(data)
        },
        ()=>{
          console.log("failed")
        }
      )
  }

  deleteOffre(id : number){
    this.offreService.deleteOffre(id).subscribe(
      ()=>{
          this.getAllOffres();
      },
      (error)=>{
          console.log(error)
      }
    )
  }


}
