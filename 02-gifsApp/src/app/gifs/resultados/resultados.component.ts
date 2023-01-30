import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent {
constructor(private gifsService:GifsService){}

  get resultados(){
    return this.gifsService.resultados;
  }
}
