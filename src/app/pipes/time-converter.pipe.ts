import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConverter'
})
export class TimeConverterPipe implements PipeTransform {

  transform(value: number): String {
    var result = value*1000;
    const date = new Date(result);
   const time =  Math.round(date.getTime() / 1000).toString()
    return date.toLocaleString();
  }

}
