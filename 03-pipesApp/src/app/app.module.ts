import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

import localeEs from "@angular/common/locales/ca-ES-valencia";
import localeFR from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs,'ca-ES-valencia')
registerLocaleData(localeFR)

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PrimeNgModule, SharedModule, AppRouterModule,VentasModule],
  providers: [{provide:LOCALE_ID,useValue:'ca-ES-valencia'}],
  bootstrap: [AppComponent]
})
export class AppModule {}
