import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ContadorComponent } from './contadores/contador.component';
//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListaComponent } from './heroes/lista/lista.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadoresModule } from './contadores/contadores.module';
import { DbzModule } from './dbz/dbz.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent
    //HeroeComponent,
    //ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadoresModule,
    DbzModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
