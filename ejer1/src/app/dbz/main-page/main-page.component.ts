import { Component } from '@angular/core';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';

interface Personaje{
  nombre:string;
  poder:number
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['main-page.component.scss']
})
export class MainPageComponent {
  nuevo: Personaje={
    nombre:'',
    poder:0
  }
  personajes : Personaje[]=[
    {
      nombre:'Goku',
      poder:150000
    },
    {
      nombre:'Vegeta',
      poder:7777
    },
    {
      nombre:'Krillin',
      poder:5000
    },
    {
      nombre:'Satán',
      poder:5
    },
  ]
  agregar(){
    if (this.nuevo.nombre.trim().length===0) {
      return;
    }
    this.personajes.push(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }
  
}
