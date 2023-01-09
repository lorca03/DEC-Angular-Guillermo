import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string = 'contadorApp';
  contador : number= 10;
  base : number= 10;
  sumres(num:number){
    this.contador+=num;
  }
}
