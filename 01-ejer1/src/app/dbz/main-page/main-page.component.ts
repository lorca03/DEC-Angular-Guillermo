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
    nombre:'Pepe',
    poder:55
  }
   constructor(){
  }
}
