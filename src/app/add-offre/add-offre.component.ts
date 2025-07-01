import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OffreService } from '../services/offre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrl: './add-offre.component.css'
})
export class AddOffreComponent {
    submitted = false;
   offreform: FormGroup = new FormGroup({
    title: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required])
  });

  constructor(private offreService : OffreService, private router :Router){

  }

  
  get f2() {
    return this.offreform.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.offreform.valid){
      this.offreService.saveOffre(this.offreform.value).subscribe(
        (data)=>{
          console.log(data)
          this.router.navigateByUrl("/offre");
        },
        (error)=>{
          console.log(error)
        }
      )
    }
  }

}
