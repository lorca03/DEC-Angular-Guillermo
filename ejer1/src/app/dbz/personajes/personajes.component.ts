import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent {
  // @Input() personajes: Personaje[] = [];
  constructor(private dbzService: DbzService) {}

   get personajes(){
    return this.dbzService.personajes;
  }
  
}
