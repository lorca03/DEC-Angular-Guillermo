import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonDate'
})
export class JsonDatePipe implements PipeTransform {

  transform(value: string): unknown {
    return new Date(parseInt(value.substr(6)));
  }

}
