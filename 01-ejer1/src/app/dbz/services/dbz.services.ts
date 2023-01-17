import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable() 
export class DbzService{
    constructor(){
        console.log('Servicio inicializado');
        
    }
    private _personajes: Personaje[] =[
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
      ]
      
       get personajes() : Personaje[] {
        return [...this._personajes];
      }
    
      agregarNuevoPersonaje(personaje:Personaje){
           this._personajes.push(personaje);
    }
}