import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss'],
})
export class NoComunesComponent {
  persona = {
    nombre: 'Fernando',
    genero: 'male',
  };
  generoMap = {
    male: 'invitarlo',
    female: 'invitarla',
    other: 'invitarle',
  };
  clientes: string[] = ['Maria', 'Pedro', 'Jose', 'Antonio','Manolo','Lucia'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos un cliente',
    other: 'tenemos # clientes ',
  };
  cambiarCliente() {
    this.persona = {
      nombre: 'Susana',
      genero: 'female',
    };
  }
  borrarCliente() {
    this.clientes = this.clientes.slice(0, this.clientes.length - 1);
  }
}
