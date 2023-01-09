import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['../../app.component.scss']
    
  })
  export class HeroeComponent {
    title : string = 'heroeApp';
    nombre : string = 'Ironman';
    edad : number = 45;

    
    get nombreMayus() : string {
      return this.nombre.toUpperCase();
    }
    
    obtenerNombre(): string {
      return `${this.nombre} - ${this.edad}`;
    }
    cambiarNombre():void {
      this.nombre='Spiderman';
    }
    cambiarEdad():void {
      this.edad=23;
    }
  }
