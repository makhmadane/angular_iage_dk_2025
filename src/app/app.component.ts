import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IAGE 3 DAKAR';


  hello(){
    console.log("Salut");
  }
}
