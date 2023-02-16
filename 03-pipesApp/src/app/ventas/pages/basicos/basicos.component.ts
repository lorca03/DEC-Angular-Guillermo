import {  Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {

  nombreLower: string='Guille'
  nombre: string='Guillermo lorca martinez'
  fecha:Date=new Date()
}
