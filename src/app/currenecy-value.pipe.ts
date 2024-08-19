import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currenecyValue',
  standalone: true
})
export class CurrenecyValuePipe implements PipeTransform {

  transform(value: number): string {
    if (value === undefined || value === null ){
    return '' ;
    }

    const formattedNumber = value.toFixed(2)
    return formattedNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  

}
