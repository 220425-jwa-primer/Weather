import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degreeconverter'
})
export class DegreeconverterPipe implements PipeTransform {

  transform(value: number): String {
  var result = 1.8 *(value - 273) + 32;
    return (result).toFixed(2);
  }

}
