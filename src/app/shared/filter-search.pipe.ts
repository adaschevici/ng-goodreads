import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(array: []): string[] {
    const arrayOfStrings = [];
    array.map(element => (typeof element === 'string') ? arrayOfStrings.push(element) : ``);
    return arrayOfStrings;
  }

}
