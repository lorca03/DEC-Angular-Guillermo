import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
