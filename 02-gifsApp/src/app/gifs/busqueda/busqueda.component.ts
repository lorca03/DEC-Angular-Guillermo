import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {
  constructor(private gifsService:GifsService){}
  @ViewChild('txtBuscar') txtBucar!:ElementRef<HTMLInputElement>
buscar(){
  const valor=this.txtBucar.nativeElement.value;
  this.gifsService.buscarGifs(valor)
  this.txtBucar.nativeElement.value='';
}
}
