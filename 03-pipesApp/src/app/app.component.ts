import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '03-pipesApp';
  nombre='Guillermo LORca MArtiNEZ'
  valor=1000
  obj={
    nombre:'Guille'
  }
  mostrarNombre(){
  console.log(this.nombre);
  console.log(this.valor);
  console.log(this.obj);
  }
}
