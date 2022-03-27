import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConverter'
})
export class TimeConverterPipe implements PipeTransform {

  transform(value: number): String {
    var result = value*1000;
    let date = new Date(result);
    let res = (date.getMonth()+1).toString() + "/" + date.getDate()
    let time =  date.toLocaleTimeString()
    return `${res}, ${time}`;
  }

}
