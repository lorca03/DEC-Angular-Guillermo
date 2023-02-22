import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { LongitudPipe } from './pages/ordenar/pipes/longitud.pipe';
import { JsonDatePipe } from './pages/ordenar/pipes/json-date.pipe';
import { MultiplicadorPipe } from './pages/ordenar/pipes/multiplicador.pipe';



@NgModule({
  declarations: [
    BasicosComponent,
    NumerosComponent,
    NoComunesComponent,
    OrdenarComponent,
    LongitudPipe,
    JsonDatePipe,
    MultiplicadorPipe
  ],
  exports:[
    BasicosComponent,
    NumerosComponent,
    NoComunesComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
