import { Component } from '@angular/core';
import { NgbPaginationNumber } from '@ng-bootstrap/ng-bootstrap';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['main-page.component.scss'],
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
  agregarNuevoPersonaje(personaje:Personaje){
    this.personajes.push(personaje);
  }
  constructor(private dbzService:DbzService){}
}
