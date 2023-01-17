import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['../../app.component.scss']
})
export class ListaComponent {
  heroes: string[]=["Thor","Spiderman","Superman","Hulk"]
  borrado: string='';
  borrarHeroe():void {
    this.borrado=this.heroes[0];
    this.heroes.shift() ;
  }
}
