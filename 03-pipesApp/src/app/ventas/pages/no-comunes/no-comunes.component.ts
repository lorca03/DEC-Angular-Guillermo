import { Component } from '@angular/core';
import { interval } from 'rxjs';

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
  persona2={
    Nombre: 'Guille',
    Edad: 19,
    Direccion:'Calicanto'
  }
  heroes=[
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    }
  ]
  miObservable = interval(1000)

  valorPromesa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    },3500)
  })
}
