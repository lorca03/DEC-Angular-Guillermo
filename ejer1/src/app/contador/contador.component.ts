import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
    <h1>{{title}} Hola mundos</h1>
    <span>La base es: {{base}}</span><br><br>
    <button (click)='sumres(base)'>Sumar {{base}}</button>
    <span>{{contador}}</span>
    <button (click)='sumres(-base)'>Restar {{base}}</button>`,
    styleUrls: ['../app.component.scss']
    
  })
  export class ContenedorComponent {
    //title = 'ejer1';
    title : string = 'contadorApp';
    contador : number= 10;
    base : number= 10;
    sumres(num:number){
      this.contador+=num;
    }
  }