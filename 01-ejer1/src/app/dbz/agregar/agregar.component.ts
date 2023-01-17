import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre:'',
    poder:0
  };
  // @Output() OnNuevoPersonaje: EventEmitter<Personaje>=new EventEmitter();
  agregar(){
    if (this.nuevo.nombre.trim().length===0) {
      return;
    }
    this.dbzService.agregarNuevoPersonaje(this.nuevo);
    // this.OnNuevoPersonaje.emit(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }
  constructor(private dbzService:DbzService){}
}
