import { Pipe, PipeTransform } from '@angular/core';

import { IBook } from './Interfaces/bookInterface';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(booksList: IBook[], filterTerm: string): IBook[] {
    if (!booksList) {
      return [];
    }
    if (!filterTerm) {
      return booksList;
    }
    return booksList.filter(book => book.originalTitle.toLowerCase().includes(filterTerm));
  }
}
