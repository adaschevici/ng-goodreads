import { fromEvent, interval, from, of, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, concatMap, mergeMap, catchError, take, retry, delay } from 'rxjs/operators';
import { XMLHttpRequest } from 'xmlhttprequest';

function* urlGenerator() {
  const urls = ['https://dog.ceo/api/breeds/list/all'];
  // tslint:disable-next-line: prefer-for-of
  for (let idx = 0; idx < urls.length; idx++) {
    yield urls[idx];
  }
}
const getData = (url: string) => {
  return ajax({ url });
};

const fetchUrl$ = new Observable(observer => {
  fetch(`${getData}`)
    .then(response => response.json())
    .then(data => {
      observer.next(data);
      observer.complete();
    });
});

fetchUrl$.subscribe(data => console.log(data));
