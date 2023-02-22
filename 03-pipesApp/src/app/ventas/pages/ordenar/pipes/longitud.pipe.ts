import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'longitud',
})
export class LongitudPipe implements PipeTransform {
  transform(variale: string): number {
    let primerBlanco = /^ /;
    let ultimoBlanco = / $/;
    let variosBlancos = /[ ]+/g;
    variale = variale.replace(variosBlancos, ' ');
    variale = variale.replace(primerBlanco, '');
    variale = variale.replace(ultimoBlanco, '');
    let textoAreaDividido = variale.split(' ');
    return textoAreaDividido.length;
  }
}
